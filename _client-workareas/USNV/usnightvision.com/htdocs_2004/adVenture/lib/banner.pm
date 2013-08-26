package banner;

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

my $banner_dir=$dblib::image_path;
my $server_url=$dblib::server_url;
my $image_url=$dblib::image_url;

sub enjavanate
{
	my($str)=@_;
	my $limit=2000;
	my $line="";
  my $output="";
	$str=~s/\r//g;

	my @len=split(//,$str);
	while($#len>0)
	{
		$line=substr($str,0,$limit);
		$str=substr($str,$limit);

		$line=~s/\\/\\\\/gi;
		$line=~s/'/\\'/gi;
		$line=~s/\r//gi;
		$line=~s/\n/\\n/gi;
		$line=~s/\t/\\t/gi;
		$line=~s/</<'+'/gi;

		$output.="document.write('$line');\n";
		@len=split(//,$str);
	}
	return $output;
}

sub time2str(;$)
{
  my $time=shift;
  $time=time unless defined $time;
	my @DoW=qw(Sun Mon Tue Wed Thu Fri Sat);
	my @MoY=qw(Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec);my %MoY;
	@MoY{@MoY}=(1..12);
  my($sec,$min,$hour,$mday,$mon,$year,$wday)=gmtime($time);
  return sprintf("%s, %02d %s %04d %02d:%02d:%02d GMT",$DoW[$wday],$mday,$MoY[$mon],$year+1900,$hour,$min,$sec);
}

sub log_impression
{
	my($dbh,$banner_id,$zone_id,$source,$host)=@_;
	my $sth=$dbh->do("INSERT INTO ad_views SET bannerid='$banner_id',zoneid='$zone_id',source='$source',host='$host',date=CURDATE(),time=CURTIME()");
	return 1;
}

sub log_click
{
	my($dbh,$banner_id,$zone_id,$source,$host)=@_;
	my $sth=$dbh->do("INSERT INTO ad_clicks SET bannerid='$banner_id',zoneid='$zone_id',source='$source',host='$host',date=CURDATE(),time=CURTIME()");
	return 1;
}

sub get_banner_template
{
	my($id,$title,$banner,$width,$height,$format,$url,$target,$status_text,$below_text)=@_;

  my $buffer="<table border=0 cellpadding=0 cellspacing=0><tr><td>";
	if($width && $height)
	{
		$buffer="<table border=0 cellpadding=0 width=$width height=$height cellspacing=0><tr><td>";
	}

	if($format eq 'swf')
	{
		$buffer.="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' ";
		$buffer.="codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/";
		$buffer.="swflash.cab#version=5,0,0,0' width='$width' height='$height'>";
		$buffer.="<param name='movie' value='".$server_url.$image_url."".$id.".".$format."'>";
		$buffer.="<param name='quality' value='high'>";
		$buffer.="<embed src='".$server_url.$image_url."".$id.".".$format."' quality=high ";
		$buffer.="width='$width' height='$height' type='application/x-shockwave-flash' ";
		$buffer.="pluginspace='http://www.macromedia.com/go/getflashplayer'></embed>";
		$buffer.="</object>";
	}
	elsif($format eq 'dcr')
	{
		$buffer.="<object classid='clsid:166B1BCA-3F9C-11CF-8075-444553540000' ";
		$buffer.="codebase='http://download.macromedia.com/pub/shockwave/cabs/director/";
		$buffer.="swdir85r321.cab#version=8,5,0,321' width='$width' height='$height'>";
		$buffer.="<param name='src' value='".$server_url.$image_url."".$id.".".$format."'>";
		$buffer.="<param name='swStretchStyle' value='fill'>";
		$buffer.="<param name='quality' value='high'>";
		$buffer.="<param name='swRemote' value=\"swSaveEnabled='false' swVolume='false' swRestart='false' swPausePlay='false' swFastForward='false' swContextMenu='false'\">";
		$buffer.="<param name='bgColor' value='#FFFFFF'>";
		$buffer.="<param name='progress' value='false'>";
 		$buffer.="<param name='logo' value='false'>";
 		$buffer.="<embed src='".$server_url.$image_url."".$id.".".$format."' quality=high ";
		$buffer.="width='$width' height='$height' type='application/x-director' ";
		$buffer.="bgColor='#FFFFFF' progress='false' logo=false' swRemote=\"swSaveEnabled='false' swVolume='false' swRestart='true' swPausePlay='true' swFastForward='true' swContextMenu='true'\" swStretchStyle=fill ";
		$buffer.="pluginspace='http://www.macromedia.com/shockwave/download/'></embed>";
		$buffer.="</object>";
	}
	elsif($format eq 'rpm')
	{
		$buffer.="<object classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' ";
		$buffer.="width='$width' height='$height'>";
		$buffer.="<param name='src' value='".$server_url.$image_url."".$id.".".$format."'>";
		$buffer.="<param name='controls' value='ImageWindow'>";
		$buffer.="<param name='autostart' value='true'>";
		$buffer.="<embed src='".$server_url.$image_url."".$id.".".$format."' controls='ImageWindow' autostart='true' ";
		$buffer.="width='$width' height='$height' type='audio/x-pn-realaudio-plugin'></embed>";
		$buffer.="</object>";
	}
	elsif($format eq 'mov')
	{
		$buffer.="<object classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' ";
		$buffer.="codebase='http://www.apple.com/qtactivex/qtplugin.cab' ";
		$buffer.="width='$width' height='$height'>";
		$buffer.="<param name='src' value='".$server_url.$image_url."".$id.".".$format."'>";
		$buffer.="<param name='controller' value='false'>";
		$buffer.="<param name='autoplay' value='true'>";
		$buffer.="<embed src='".$server_url.$image_url."".$id.".".$format."' controller='false' autoplay='true' ";
		$buffer.="width='$width' height='$height' pluginspace='http://www.apple.com/quicktime/download/'></embed>";
		$buffer.="</object>";
	}
	elsif($format eq 'html' or $format eq '')
	{
		if($url eq 'http://' or $url eq '')
		{
			$buffer.=$banner;
		}
		else
		{
			$buffer.="<a href='$url' target='$target' ";
			if($status_text){$buffer.="onMouseOver=\"self.status='$status_text'; return true;\" onMouseOut=\"self.status='';return true;\"";}
			$buffer.=">";
			$buffer.=$banner;
			$buffer.="</a>";
		}
	}
	else
	{
		$buffer.="<a href='$url' target='$target' ";
		if($status_text){$buffer.="onMouseOver=\"self.status='$status_text'; return true;\" onMouseOut=\"self.status='';return true;\"";}
		$buffer.="><img src='".$server_url.$image_url.$id.".".$format."' width='$width' height='$height' alt='$title' title='$title' border='0'>";
		$buffer.="</a>";
	}

	if($below_text){$buffer.="</td></tr><tr><td align=center><a href='$url' target='$target'>$below_text</a>";}

	$buffer.="</td></tr></table>";

	return($buffer);
}

# Copyright (c) 2002 GuruPerl.com All rights reserved.
# http://www.guruperl.com/products/ - check the lastest version of AWP

1;
