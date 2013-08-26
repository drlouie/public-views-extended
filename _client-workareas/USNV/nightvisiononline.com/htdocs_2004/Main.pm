#################################################################
#            Main.pm
#
# This program is distributed as freeware. We are not            	
# responsible for any damages that the program causes	
# to your system or business. It may be used and modified free of 
# charge, as long as the copyright notice
# in the program that give us credit remain intact.
# If you find any bugs in this program. It would be thankful
# if you can report it to us at cgifactory@cgi-factory.com.  
# However, that email address above is only for bugs reporting. 
# We will not  respond to the messages that are sent to that 
# address. If you have any trouble installing this program. 
# Please feel free to post a message on our CGI Support Forum.
# Selling this script is absolutely forbidden and illegal.
##################################################################
#
#               COPYRIGHT NOTICE:
#
#         Copyright 1999-2001 CGI-Factory.com TM 
#		  A subsidiary of SiliconSoup.com LLC
#
#
#      Web site: http://www.cgi-factory.com
#      E-Mail: cgifactory@cgi-factory.com
#      Released Date: August 14, 2001
#	
#   Main.pm is protected by the copyright 
#   laws and international copyright treaties, as well as other 
#   intellectual property laws and treaties.
###################################################################

package Main;
 
##append a line into a datafile
# $line is a string and $filePath is the file for the string to be added
sub appendLine($filePath,$line) {
	my ($filePath, $line) = @_;

	&flock($filePath.".lock");
	open (appendLine, ">>$filePath") or &error("unable to write to $filePath",$filePath.".lock"); 
	print appendLine "$line\n";
	close (appendLine);
	&unFlock($filePath.".lock");
}


##print out files to the browser
#$filePath is the file that contains to contents to be printed

sub printHTML($filePath) {
my ($filePath) = @_;

open (printHTML, "<$filePath") or &error("Unable to open $filePath");
@printHTML=<printHTML>;
close(printHTML);
foreach $printHTML(@printHTML) {
print "$printHTML\n";
}
}

#file locking. flock and unFlock take the full file path and the lock file and then create the lock file
#you decide the name of the lock file

sub flock($lock_file)
  {
  local ($lock_file) = @_;
  local ($timeout);

  $timeout=20;
  while (-e $lock_file && 
        (stat($lock_file))[9]+$timeout>time)
  { sleep(1);}
 
  open LOCK_FILE, ">$lock_file" 
    or &error("Unable to create $lock_file");
}

sub unFlock($lock_file)
  {
  local ($lock_file) = @_;

  close(LOCK_FILE);
  unlink($lock_file);
  }



#time coversion subroutine. it takes the unix time and covert it to date, time.
#dateFormat 1 = mm/dd/yyyy
#dateFormat 2 = dd/mm/yyyy
#printTime 1 = print out hh:mm:ss  

sub convertTime($unixTime,$dateFormat,$printTime) {
	my ($unixTime,$timeFormat,$printTime) = @_;
	($sec,$min,$hour,$mday,$mon,$year,$wday) = (localtime($unixTime))[0,1,2,3,4,5,6];
	$sec = sprintf("%.02d",$sec);
	$min = sprintf("%.02d",$min);
	$hour = sprintf("%.02d",$hour);
	$mday = sprintf("%.02d",$mday);
	$year += 1900;
	#date format

	if ($dateFormat==2) {
	        $mon++;
	  		$date = "$mday/$mon/$year ";	
	   }
	   else {
	        $mon++;
	   		$date = "$mon/$mday/$year ";	
	    }

		$date =$date."$hour:$min:$sec" if ($printTime==1);
		
		return $date;

}
  

#mail subroutine
#a simple email subroutine. nothing special.

sub mail($mailProg,$to,$from,$subject,$message) {
my ($mailProg,$to,$from,$subject,$message) = @_;

open (MAIL, "|$mailProg") or &error("Unable to open the mail program.");
	
print MAIL "To: $to\n";
print MAIL "From: $from\n";
print MAIL "Subject: $subject\n\n";
print MAIL "$message\n\n"; 
             
close(MAIL);


}

##password encryption
#this routine takes two password and verify them. if they are the same, the routine will
#encrypt the password and return 1 and the encrypted password. 
#Otherwise, -1 and error message are returned
#the returned value is an array

sub encryptPassword ($newPass1, $newPass2, $minLength, $encryptKey) {
my ($newPass1, $newPass2, $minLength, $encryptKey) = @_;
my @returnValue;


if (length($newPass1) < $minLength or length($newPass2) < $minLength) {
   @returnValue[0]=-1;
   @returnValue[1]="The password needs to be at least $minLength characters long.";
}
else {

	 #encrypt the password
	 $newPass1 = crypt($newPass1, "$encryptKey");
	 $newPass2 = crypt($newPass2, "$encryptKey");
	 
	 if ($newPass1 ne $newPass2) {
   	 	@returnValue[0]=-1;
   		@returnValue[1]="You entered to different passwords.";
		}
		else {
	 		 @returnValue[0]=1;
     		 @returnValue[1]=$newPass1;
			 }
		}


return @returnValue;

}

#this subroutine handles user and passwords in a .htpasswd file
#when newUser and newPass are not specified, the action will be delete
#otherwise, the action will be modify
#if @userPair only contains the username, the script will not verify the user password
#if #userPair contains the password, the script will verify the user password
#1= job completed. 
#-1 = user not found. 
#-2=password does not match user's password


sub htpasswdEdit ($passwordFile,$user,$pass,$newUser,$newPass,$encryptKey,$separator) {

	my ($passwordFile,$user,$pass,$newUser,$newPass,$encryptKey,$separator)=@_;
	$separator=":" if (!defined ($separator) or !$separator);

	&flock($passwordFile.".lock");
	open (data, "<$passwordFile") or &error("Unable to open the password file",$passwordFile.".lock");
	my @data=<data>;
	close(data);
	&unFlock($passwordFile.".lock");
 
    	$count=0;
	foreach $data(@data) {
		my @datax=split(/$separator/, $data);

		unless ($user ne @datax[0] or $user != @datax[0]){
			   chomp(@datax[1]);
			   
			   #if $pass is passed, verify the user's password
			   if ($pass) {
				  @datax[1]="YL" if (!@datax[1]);
				  
			   	  $pass=crypt($pass, substr(@datax[1],0,2));
			       	
				  if ($pass ne @datax[1]) {
				  	 return -2;
				  }
			   
			   }
			 
			   #replace the old user with the new username if $newUser is passed
				if ($newUser){
				   			          
   				   $newPass=crypt($newPass, $encryptKey) if ($encryptKey);
				   
				   @new="$newUser:$newPass\n";
				  
				   splice (@data, $count, 1, @new);
				}
				else {
					 splice (@data, $count, 1);
				}
				
				#record the new passwords
				&flock($passwordFile.".lock");
				open (wpass, ">$passwordFile") or &error("Unable to write to the password file.",$passwordFile.".lock");
				print wpass @data;
				close (wpass);
				&unFlock($passwordFile.".lock");
				return 1;
				
				}
				$count++;		

		}
	
return -1;


}
 
#file copying. the subroutine takes two file pathes and copy the first file to the second file path
#if you are not careful, you can overwrite your importnat files. 

sub copyFile($filePath1,$filePath2) {
my ($filePath1,$filePath2) = @_;

	&flock($filePath1.".lock");
	open (file, "<$filePath1") or &error("Unable to open $filePath1.",$filePath1.".lock");
	@file=<file>;
	close (file);
	&unFlock($filePath1.".lock");
	
	&flock($filePath2.".lock");
	open (file, ">$filePath2") or &error("Unable to write to $filePath2.",$filePath2.".lock");
	print file @file;
	close (file);
	&unFlock($filePath2.".lock");


} 
 
#copy file subroutine. The subroutine accepts two file path - sources and destination
sub copyFile($source, $destination) {
	my ($source,$destination) = @_;
	
	&flock($source.".lock");
	open (file, "<$source") or &error("Unable to open $source.",$source.".lock");
	@file=<file>;
	close (file);
	&unFlock($source.".lock");
	
	&flock($destination.".lock");
	open (file, ">$destination") or &error("Unable to write to $destination.",$destination.".lock");
	print file @file;
	close (file);
	&unFlock($destination.".lock");



}
 
 
##verifying the admin password
# return values and their meanings
# 1. user verified
# -2. username not found
# -1. Error password
 
sub verifyAdmin($passFile,$adminName,$adminPass,$encryptionKey,$separator,$errorLogFile,$errorLogEntry) {
	my ($passFile,$adminName,$adminPass,$encryptionKey,$separator,$errorLogFile,$errorLogEntry) = @_;
	my $verifyStatus;
	#open the password File
	$verifyStatus=-2;	

	open (passFile, "<$passFile") or &error("Unable to open $passFile.");
	@passFile=<passFile>;
	close (passFile);

	#there might be mutiple user pairs in the password file. Use a while loop to verify the username password
	#break out the while loop if the user is verified
	$arraySize=@passFile;
	while ($arraySize >=0 and $verifyStatus==-2) {
		
		my @entryx=split(/$separator/, @passFile[$arraySize]);
		$arraySize--;
		unless ($adminName ne @entryx[0] or $adminName != @entryx[0]){
	
			   chomp(@entryx[1]);
			   
			   #verify the password file
			  
			   	  $adminPass=crypt($adminPass, $encryptionKey);
				  #wrong password, update the verifyStatus bit to -1
				  if ($adminPass ne @entryx[1]) {
				  	 $verifyStatus= -1;
					
				  } else {
					 $verifyStatus=1;
				  }
			   
			   }
			   
			
		}
	
	if ($verifyStatus!=1) {
		#the user is not identified
		#log the attempt
		&appendLine($errorLogFile,$errorLogEntry);

	}
	return $verifyStatus;	
	
}

#remove an entry from an text file
#be careful! It does compare with eq or ==. It actually does a seach with ~/.../i;
sub removeEntry ($file,$entryToRemove) {

	my ($file,$entryToRemove) = @_;
	my $status =-1;   
	#read in the text file   
	open (file, "<$file") or &error("Unable to open $file.");
	@entries=<file>;
	close (file);

	#locate the line that matchs
	$arraySize=@entries;
	
	while ($arraySize >=0 and $status==-1) {
		
		
		$arraySize--;
		
		$entry=@entries[$arraySize];
		chomp($entry);
		
		if ($entryToRemove =~ /$entry/i) {
		   	#set the stats bit to break out the loop
			$status=1;   
		}
			   
			
	}
	
	if ($status==1) {
	
	   	splice (@entries, $arraySize, 1);
		#save the data file
		&flock($file.".lock");
		open (file, ">$file") or &error("Unable to write to $file.");
		print file @entries;
		close (file);
		&unFlock($file.".lock");	
	}	
	
	return $status;

}
 
##error handling subroutine. specifile the lockFile path if the file was locked 
sub error($errorMessage,$lockFile) {
	my ($errorMessage,$lockFile) = @_;	
	#clear the lock file	
	if (defined($lockFile)) {
	   &unFlock($lockFile);
	}

	print qq|
	<table border="0" bgcolor="black" cellspacing="1" cellpadding="0">
		   <tr>
		   	   <td>
			   	   <table bgcolor="white" cellspacing="0" cellpadding="0">
				    <tr bgcolor="#6699FF">
				       <td>
		   	   	         <font size="+2" color="white"><b>An error has occured</b></font>
		   		        </td>
				     </tr> 
				     <tr>
				       <td>
					     <ul>
					     <br><br>
		   	   	         <font color="#ff0000"><b>Error message:</b></font><br>$errorMessage<br><br>\n
		   		         <font color="#ff0000"><b>Reason/Debugging message:</b></font><br>$!<br><br>\n
		   		         <font color="#ff0000"><b>Additional Info:</b></font><br>
						 Please contact the webmaster or the server admin if you keep getting this message.<br>\n
		   		         If you are the webmaster, there is no need to panic. The scripts are already functioning and that is why you can see this message. The cause of this error is likely to be something minor. For example, incorrect system path or incorrect file permissions.<br>\n
		   	           	 <br><br>
						 If you need any asistance, please visit us at <a href="http://www.cgi-factory.com">cgi-factory.com</a>, a subsidiary of SiliconSoup.com (Slicon Soup) LLC.
						 </ul>
					   </td>
				     </tr>
				   </table>
				</td>
		   </tr>
	</table>
	|;
	
	exit;	
	
	
}

  
return 1;

sub END {}
