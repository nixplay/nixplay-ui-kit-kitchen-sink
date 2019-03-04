# Nixplay UI Kit Kitchen Sink

## 1. Setup

### 1.0 Pre-requisites

1. install nvm
2. install node from nvm
3. brew install watchman
4. brew install yarn
5. install jdk 8
6. install react-native cli

For IOS
1. Install XCode from the App store
2. When XCode prompts to "Install additional required components" - please install
3. Fix a silly bug in XCode: Open XCode and go to Xcode menu, then Preferences, then Locations tab. In the dropdown for 'Command Line Tools' - Select your Xcode version from the dropdown and exit Xcode.

For Android
1. install android studio
2. install android sdk
3. Open ~/.bash_profile and add:
	```
	export ANDROID_HOME=~/Library/Android/sdk/
	export PATH=$PATH:~/android-sdks/platform-tools/
	export PATH=$PATH:~/android-sdks/tools/
	```

### 1.1 Check compatibility
To run this mobile app, we need to have node `8.x.x` installed.
To install and manage multiple versions of node, we can use [nvm](https://github.com/creationix/nvm)

Install nvm on Mac:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.bashrc
nvm install 8
npm i react-native-cli -g
```

### 1.2 Install kitchen sink dependencies

Clone the repository and then install all dependencies by running the following command:

```
bash
nvm use
npm install
```


### 1.3 Run
To run on iOS simulator

```
bash
npm run ios
```

To run on Android emulator

```
bash
npm run android
```
