package dblib;

########################
# mySQL config:
########################
my $db_host="localhost";
my $db_name="adVenture";
my $db_login="root";
my $db_password="chinga2";
########################

use DBI;
use vars qw($dbh $server_url $image_path $image_url);

$dbh=DBI->connect("DBI:mysql:database=$db_name;$db_host",$db_login,$db_password,{PrintError=>0}) || die "Cant connect $DBI::errstr";

my $sth=$dbh->prepare("SELECT server_url,image_path,image_url FROM ad_options");$sth->execute();($server_url,$image_path,$image_url)=$sth->fetchrow_array;

1;
