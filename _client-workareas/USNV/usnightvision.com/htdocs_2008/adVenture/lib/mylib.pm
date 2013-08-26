package mylib;

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

sub adm_main_tmpl
{
	my($dbh,$q,$templ,$st,$info)=@_;

	my $image_path=$dblib::image_path;
	my $image_url=$dblib::image_url;
	my $server_url=$dblib::server_url;

  	 $templ->param(SNAME=>$ENV{'SCRIPT_NAME'},SERVER_URL=>$server_url,IMAGE_PATH=>$image_path,IMAGE_URL=>$image_url);
	my $template=HTML::Template->new(filename=>'templates/admin/adm_main.tmpl',die_on_bad_params=>0,global_vars=>1,associate=>[$q]);
		 $template->param(BODY=>($st>0 ? $templ : $templ->output),
		 									INFO=>$info,
		 									SERVER_URL=>$server_url,
										  IMAGE_PATH=>$image_path,
										  IMAGE_URL=>$image_url,
										  SNAME=>$ENV{'SCRIPT_NAME'});
	return $template;
}

sub nav
{
	my($all,$max_on_page,$page,$cur,$categories_id)=@_;
	my($i,$a,$r,$sr,$er,$c,$prev,$next,$dop);

	if(defined $categories_id){$dop="";}else{$dop="";}

	my $str="Page: ";
	my $pages=int($all/$max_on_page);
	if($all % $max_on_page){$pages++;}
	$i=1;$a=1;$r='| ';

	if($page>1)  # prev
	{
		while($a<$page)
		{
			$prev=$a;
			$sr=($max_on_page*($prev-1))+1;
			$er=($max_on_page*$prev);
			if($ENV{QUERY_STRING}=~/page/)
			{
				$ENV{QUERY_STRING}=~s/page=(\d+)/page=$prev/i;
				$str.="<a href=\"?$ENV{QUERY_STRING}\" title=\"$sr-$er\">$prev</a>$r ";
			}
			else
			{
				$str.="<a href=\"?page=$prev&$ENV{QUERY_STRING}$dop\" title=\"$sr-$er\">$prev</a>$r ";
			}
			$a++;                                                                                                                                                                                                                                                           #[$prev]
		}
	}
	if($i==1)		# cur
	{
		if($pages==$page){$r='';}
		$str.="<b>$page</b>$r ";
		$i=0;
	}
	if($page<$pages) # next
	{
		while($page<$pages)
		{
			$next=$page+1;
      $c=$pages-$page;
			$sr=($max_on_page*$page)+1;
			$er=($max_on_page*($page+1));
			if($c==1){$er=$all;$r='';}
			if($ENV{QUERY_STRING}=~/page/)
			{
				$ENV{QUERY_STRING}=~s/page=(\d+)/page=$next/i;
				$str.="<a href=\"?$ENV{QUERY_STRING}\" title=\"$sr-$er\">$next</a>$r ";
			}
			else
			{
				$str.="<a href=\"?page=$next&$ENV{QUERY_STRING}$dop\" title=\"$sr-$er\">$next</a>$r ";
			}
			$page++;                                                                                                                                                                                                                                                 #[$next]
    }
	}
	if($all==0){$str.="";}
	if($all<=$max_on_page){$str="";}

  return $str;
}

sub select_html
{
	my($dbh,$table,$sel,$type)=@_;
  my($str,$res);
 	if($type)
 	{
 		$str="<select name=zone_id class=myinput style='width:400px;'><option value=0>= Select Advert Zone =";
		$res=$dbh->prepare("SELECT id,name FROM $table");$res->execute;
  	while(my($id,$name)=$res->fetchrow_array)
  	{
   		$str.='<option value='.$id;
   		if(defined $sel && $id==$sel){$str.=' selected';}
    	$str.='>&nbsp;&nbsp;'.$name;
  	}
  	$str.='</select>';
 	}
 	else
 	{
 		$str="<select class=form name=$table>";
		$res=$dbh->prepare("SELECT id,name FROM $table");$res->execute;
  	while(my($id,$name)=$res->fetchrow_array)
  	{
   		$str.='<option value='.$id;
   		if(defined $sel && $id==$sel){$str.=' selected';}
    	$str.='>'.$name;
  	}
  	$str.='</select>';
  }

  return $str;
}

sub get_pole_max
{
	my($dbh,$pole,$table,$where,$id)=@_;
	my $res=$dbh->prepare("SELECT ".$pole." FROM ".$table." WHERE ".$where."=?");$res->execute($id);return ($res->fetchrow_array or 0);
}

# Copyright (c) 2002 GuruPerl.com All rights reserved.
# http://www.guruperl.com/products/ - check the lastest version of AWP

1;
