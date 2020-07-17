<!DOCTYPE html>
<html>
<head>
    <title>OS Examples</title>
    <script>
        function findOS() {
          var curOS="Not Nmaed...";
          if (navigator.appVersion.indexOf("Win")!=-1) curOS="Windows";
          if (navigator.appVersion.indexOf("Mac")!=-1) curOS="MacOS";
          if (navigator.appVersion.indexOf("X11")!=-1) curOS="UNIX";
          if (navigator.appVersion.indexOf("Linux")!=-1) curOS="Linux";
          alert('Your OS: '+curOS);
        }
    </script>
</head>
<body>
    <h2>Find Your Operating System</h2>
    <p>
        <input type="button" value="Find Operating System" onclick="findOS()" />
    </p>
</body>
</html>