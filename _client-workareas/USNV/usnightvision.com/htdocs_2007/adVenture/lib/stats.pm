package stats;

#########################################################################
# Advertise With Pleasure, AWP(TM)
# Copyright © GuruPerl Software Inc. All rights reserved.
#
# By purchasing, installing, copying, downloading, accessing or otherwise
# using the SOFTWARE PRODUCT, or by viewing, copying, creating derivative
# works from, appropriating, or otherwise altering all or any part of its
# source code (including this notice), you agree to be bound by the terms
# of the EULA that accompanied this product, as amended from time to time
# by GuruPerl Software Inc.
#########################################################################

use strict;
use lib './lib';
use dblib;

sub build_ctr
{
	my($views,$clicks)=@_;
	my $ctr=0;
	if($views!=0 && $clicks!=0){$ctr=($clicks/$views)*100;}
	$ctr=sprintf("%.2f",$ctr);
	$ctr=$ctr."%";
	return $ctr;
}

sub delete_stats
{
	my($dbh,$bannerid)=@_;

	my $sth=$dbh->do("DELETE FROM ad_views WHERE bannerid='$bannerid'");
		 $sth=$dbh->do("DELETE FROM ad_clicks WHERE bannerid='$bannerid'");
		 $sth=$dbh->do("DELETE FROM ad_stats WHERE bannerid='$bannerid'");
}

sub total_zones
{
	my($dbh)=@_;
	my $sth=$dbh->prepare("SELECT COUNT(id) FROM ad_zone");$sth->execute;my($cnt)=($sth->fetchrow_array or 0);$sth->finish;
	return $cnt;
}

sub total_banners
{
	my($dbh)=@_;
	my $sth=$dbh->prepare("SELECT COUNT(id) FROM ad_banner");$sth->execute;my($cnt)=($sth->fetchrow_array or 0);$sth->finish;
	return $cnt;
}

sub total_active_banners
{
	my($dbh)=@_;
	my $sth=$dbh->prepare("SELECT COUNT(id) FROM ad_banner WHERE active=1");$sth->execute;my($cnt)=($sth->fetchrow_array or 0);$sth->finish;
	return $cnt;
}

sub total_inactive_banners
{
	my($dbh)=@_;
	my $sth=$dbh->prepare("SELECT COUNT(id) FROM ad_banner WHERE active=0");$sth->execute;my($cnt)=($sth->fetchrow_array or 0);$sth->finish;
	return $cnt;
}

sub imp
{
	my($dbh,$type,$date_start,$date_end)=@_;
	my $sth=$dbh->prepare("SELECT count(*) AS qnt FROM ad_$type WHERE date BETWEEN '$date_start' AND '$date_end' GROUP BY date");$sth->execute;
	my $all=0;
	while(my($cnt)=$sth->fetchrow_array){$all=$all+$cnt;}$sth->finish;
	return $all;
}

sub uniq_imp
{
	my($dbh,$type,$date_start,$date_end)=@_;
	my $sth=$dbh->prepare("SELECT count(DISTINCT bannerid,host) AS qnt FROM ad_$type WHERE date BETWEEN '$date_start' AND '$date_end' GROUP BY date");$sth->execute;
	my $all=0;
	while(my($cnt)=$sth->fetchrow_array){$all=$all+$cnt;}$sth->finish;
	return $all;
}

sub ban_imp
{
	my($dbh,$type,$date_start,$date_end,$banner_id)=@_;
	my $sth=$dbh->prepare("SELECT count(*) AS qnt FROM ad_$type WHERE date BETWEEN '$date_start' AND '$date_end' AND bannerid='$banner_id' GROUP BY date");$sth->execute;
	my $all=0;
	while(my($cnt)=$sth->fetchrow_array){$all=$all+$cnt;}$sth->finish;
	return $all;
}

sub ban_uniq_imp
{
	my($dbh,$type,$date_start,$date_end,$banner_id)=@_;
	my $sth=$dbh->prepare("SELECT count(DISTINCT bannerid,host) AS qnt FROM ad_$type WHERE date BETWEEN '$date_start' AND '$date_end' AND bannerid='$banner_id' GROUP BY date");$sth->execute;
	my $all=0;
	while(my($cnt)=$sth->fetchrow_array){$all=$all+$cnt;}$sth->finish;
	return $all;
}

# Copyright (c) 2002 GuruPerl.com All rights reserved.
# http://www.guruperl.com/products/ - check the lastest version of AWP

1;
