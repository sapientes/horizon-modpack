Import-Module Microsoft.PowerShell.Utility

# Define the URLs and the target directory
$unsupUrl = "https://git.sleeping.town/unascribed/unsup/releases/download/v0.2.3/unsup-0.2.3.jar"
$unsupIniUrl = "https://raw.githubusercontent.com/nyxmc/pseudoscience-modpack/v1.1/include/unsup.ini"
$profileUrl = "https://github.com/nyxmc/pseudoscience-modpack/releases/download/v1.1.2/profile.json"

$response = Invoke-WebRequest -Uri $profileUrl
$profileString = $response.Content -replace "%s", "$env:APPDATA"
$profile = ConvertFrom-Json -InputObject $profileString
$profileKey = $profile.PSObject.Properties[0].Name

$targetDir = $profile.$profileKey.gameDir

# Create the directory if it doesn't exist
if (!(Test-Path -Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir
}

# Download the files
Invoke-WebRequest -Uri $unsupUrl -OutFile "$targetDir\unsup.jar"
Invoke-WebRequest -Uri $unsupIniUrl -OutFile "$targetDir\unsup.ini"

# Update the launcher_profiles.json
$profilesPath = "$env:APPDATA\minecraft\launcher_profiles.json"
$profilesString = Get-Content -Path $profilesPath -Raw
$profiles = ConvertFrom-Json -InputObject $profilesString

$profiles.profiles.$profileKey = $profile

# Save the updated file
$newContent = ConvertTo-Json -InputObject $profiles
Set-Content -Path $profilesPath -Value $newContent