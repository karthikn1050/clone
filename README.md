# Dhvani-ADR Dashboard
> A Dashboard built with the MERN stack .

MERN stack is intended to provide a starting point for building full-stack JavaScript applications, including dynamic web and mobile apps. The stack is made of MySql, Express, React,  and NodeJS.
<p align="center">
   <a href="https://travis-ci.com/amazingandyyy/mern">
      <img src="https://travis-ci.com/amazingandyyy/mern.svg?branch=master" />
   </a>
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

# Usage (Run Fullstack app on your machine)

## Prerequisites
- [MySql](https://github.com/mysql)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other


## Project Structure
```terminal
LICENSE
package.json
server/
   package.json
  routes/api/.env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

## Client-side usage(PORT: 3000)
```terminal
$ cd client   // go to client folder
$ npm i       // npm install packages
$ npm start // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add your own secret and access keys and db details on .env to run these app)


### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```
# Screenshots of this project
## For User
ADR Homepage
![User visit public and Home page](https://lh3.googleusercontent.com/pw/AM-JKLW5qT4Ecmkw8j5o12bC6T6VA4VT3AJrYvuXfyZi_OC0BsoEH1or17uO_Sa0U353xLUo1zwbR5togGmBD2CazgzYx8Yd-ntJSykgIt0m1ljbjj8BDRskVnpW5T7NuItWSQAzIMHezpBgiL3knZlqqoCh=w1919-h344-no)

Upload Images with Dataset Name
![User can sign in or sign up](https://lh3.googleusercontent.com/CpNPX3CfphkzT3Ia1fnt94xzFFSbWunl7cN5JQ6KhmVTuexJOfx4RnWg0byrCEUJK0zSAolBMSdDkgqj6I4n-OMFDET5R4_EPrt9N-xjCiC2E5aVST5lwZ81B5cnn1vGWvuo14oQgWgbWyqBEY8NDt_H-FCH-qUFriEJ7CCcD0HRA_kUVKdUYHTdcfJZghpv2ULOcSElDvgmKvCMesZGHFZUpYfhQeAgrEBEPaFlYneQfPJVF_ipfjk9jce-BI6bWVh0QLbGXgH2flQ3KDz2B8-075JrfdMY-foQFWMgM1fVWg6Zupz0lbPN1qgDxDh84t9-KandbLhmzm_KSjxdNgJKBnSJXeOSwfpTDIyV2cmOXTci-1ENUR4blCqHy7P2DKttwuUUMp9SY5LUGrP9EPu7ZhQG_6oi0OxVrDxAAMGoHY87dMiDbzovIYRztS2n4KH1ZYVXC75ZqrgJW5dZUqA9Jpss41FBQbKaOBP-Pu1bupXCSvU6bPX3FVK0UJKmcE5ux1lGCMVT27vNknX6Z0JuiJr7oErPG1qRmlek_XFkwa3ABpLT6FSke6Ori9B50C2I2w2xFRgT2hxST_GwRuW7Zhpvs-UBeJXvJuBiRTV_C5sN9aikvpADQoD5w7NCs7w6LzXWFQ3C1xEORP9CVsOqwWYpX5_DAYaoZB4Mffgtc6MH-e1ySOTyxQ-1U5LcVelzNufbBgghNWTyQzNx7YYv=w695-h509-no?authuser=2)

Select Model and do Inference
![After signing in user can go to account route](https://lh3.googleusercontent.com/6OLpW2g7Jflte9C1_iKlm4C1G8EaKbw2rKnSyhbqB76P1A9_M8xAwCA1902Ep8g2qnqe7qKQEYLkgVFgNEFAUuhp0hj15ij6DKwzx-HZZ9fZaqRtKbf04KGxZarjZ83xfqIN_JxZmG9OLQ_ihp-6s09pWyoDFpJP7SO26YFj3J1WEf9Ml5CmBWwG6CWz_Hvl8ociQ1yXtEWCdhDPIyxkwIOj2skfzfEVcDvNho4TRx8Ilioz4dw5Fy0tk1_lcOudG_HkxFNIrRjUAdaFoJnptT4j8-iTf5NyIem6RJbIrDwfUp6QWBzMgU4fdxotiKDq0HpUVPVdNLO_zZgrjYuon74t0_fHaoZQFbiuRYlIvyfHuNoEUfEvl1-IqKCM8selr3Fwpcttar8usyWuDZyOUlt3e4kxt6e2lgmaB3AzCabxqkerDRxxk53Ba4mXXNzwxywja-ZADb2An8WHouxGG9wLkye9ii2ZL_NgVx1V4HXpL2RHD0QMdY0RECeNEpa0ZPjowHh-MdyDlgc8BLTys8rTF_8d3g4PCFvlRtlXRIke_33kTAPaiTNwXuCa0nTZSTd-dTUdcz_4b_mRZphiINWCQKFf1e8mQ3nX68sPKfQEFEQGr1vmY9VlZ95c5YtfX4YH1TSK0DnEQGhqWM-zFQ5zRn_27WHCRafurOhWqt51jrT2Jen4dobKYIeByTvE1840ISG0DMSkOXijpxlngi_p=w1827-h476-no?authuser=2)

Seeing the Results
![After signing in user can go to account route](https://lh3.googleusercontent.com/7c4cwYpDbkL2cK_jOAF7I5mU1rhi_a1uskqgXf28wvS1cVPZFkCr96US8yH0NhRP29noz6Q2CywZrKlHrBX637itMv7tEFfqxY3gRTwM0s_cPmU_Np_w1E8ZDr--YuXOm66gEq6JdaDuBEbI9y43NwEqXYwTdyEbWJI8W6l-BstpIF3ig7MQblMaJSYa7jSYJPMQWgkMy4gSH9GL72LKQtWNoJKd6WCn8sxkFu9h-OJmffsvya8Yraeowd1KTJuXUQKk4OUptD_BY-zYJMTOfiO24SF4N16mx9xabwJm2jsjN1UmXy0GsPXcdDwFVxBZyYOio_N1OC6BZs7U0pknKTuA6qwHRHhcdP829IJBBiOhkUSzZsxONRwsZeNrd1lEhk11lvH1UT1lRL79KUVcU8jVV5B9zhzqcLr4ug1feYvSt3Riyis95G-w26JzDEw07miGW9YXtqm_-QU8Ew70VgLXuZG6Rx_ZaX5LSGdJBtHTw0yuS9i7_zpy010H3vMLYn95yR1Zei9yFiEG2a576A0UKzJNz8pdglAV-CDEY5sNGkr1DP078ZD4IKaHoNErSMPE8lpZ-Zd2XfnsfY4RfK00piuFgrSfFpUhWMdT_FFYIBXTNF-ufpMQ0Jzu256Jua7DtGPwWQHkqU3zpP7Dcu4G8nWwnwGp1c4mjMbkbNxNHHVmP5-u4tA4xwIJHEex4az3pRlska2DrWJ2l48KXVJB=w1898-h899-no?authuser=2)

## For Admin
Admin have access to user managemnt page where he can create users and manage them
![create users](https://lh3.googleusercontent.com/XF3MJxlj8hg6Irma20mEV2-hysT4JqUeVw6pPwJ__GKLH0RnlMQwb0dS5HrpSIx1K8kiCiSHkM_2XWcbddEVP2_V31n_sD34Jv8B_Q5nAN4sCi4lHDAatEaUbkL0L1hglC5FZQQeNlu-nwxisK-dxaytXs7Sj7X8YRi0dd5aaIgyRYVH2UeCG6QoTrwzyRajFIIUK9C9YQJvNEnFKtrSIy-5qenDRHQYLYa7Qi4n501a-AH5u0juSPlXq5h5QUKNEl_H4d0zO4fjEKwvHFtRf-eTjmBlrWu_Ub4QJrLgxZYRRZ6536DKY3JAfKwkSkD1rvbGeEo2DpNVlo_7e7JcjjhIruyoBK0ztNHTUOrnBv_WXPsFMkUWNulEpR47PxQyHDlTGfpoLvkOgzjQnjBsxQMxlSTAb6QsJfUNaMXBw4o3raJb6Qpol9wlj9XNmNj9eN_NVSGuQdq7UHK1_CScGIkWxpritf-IPzJqfCFmmE4oViXaeOYReWFXQdkpSUiGyAfHRLq49nBrd1G9XrOgZTOmtrxj4icHnanjxzp2zpW_sofD3d64YN7OOrB_QlYgAUaqEMQrnREGGP1XjCneMRnvCq046WaO5lR58h1FUWQyY_neTRAGjUMuvx5K2ZQC5YGd2tag2mx8vPBE1gPNxkp9ThUIB8L12wFR6k-YdsINRlXIItyB42bvBEQXTS9tyCcVd5jocGOQzNY9PwpZBplV=w1911-h867-no?authuser=2)
Admin can create users
![create users](https://lh3.googleusercontent.com/z9DWt-2O-fpgvCNehd5gviDikGB0kin8MacIbnkueg24EGLfaMqr8M-dieuWd3A-uxqiMsQ044zC4oQfjP5iA4TSTNOhOHGkbOOUIJ0G-wWJ8a56my1DM6CK1-cIoapkD2jpZaBAyuRS1yyahWTHgZUV_-2CDJwj3op_VKyLruxL2zbovV6gXzw5uftWJ1GVywCLXbegFZZgoAfZzH9HoK_Px2AAs-p3_dLQpswRvAMyen0ZpyJAJdZjBraNZFSDKswuvZCQsYzhfp0jYpUh2GW4waK9ssPbNoQjCrnGeZyVpjWiHql7FIPer8paeKmSJoGwhaEPsoZf6_aPTefNlJsLsQ5Y8dsqjaHZbNj-nKaiwt9n3B7XYRmi05QL00a2Mq_ocFk1VM_mrZwo1p_wxRe56qdy-Ep7anyv2bE7FqxjILQyjyxQxFhVB4a9SSdxofHv7BZK58lQWzPrp23s4GdmNVpTeySl_eP3VeWtDOo--3r5wmipVAOci3gPtQOdwqmAYDjF0c-2RLDnm0iDC96DqogionaFdzyQqQQv7npK5-Mk_Ut9eCNaBr630xhAkWcEwwPthkwtwZND2VVQjDNoeQHCN6jlH3TM0Ia6naUad4rkNzS5Xui2bPgheDrd-G1CeKo6-3C92UEa24H71APaxtJx_Hf4NvZKSt0swPJrxIswhqzJIk_FSaw4QuXJvVVYWL0Fc7ZH0Lc-TdNQszL2=w825-h843-no?authuser=2)
Admin can create Appstream users and assign apps for them
![create users](https://lh3.googleusercontent.com/HeEYikYfkHc_T_eUd9uFmeN3L9lr9cIMbvGN-dH6LbofIt5AW7RQIUGQl8BUVB8tNO97xrjdYFpG-4HBO1YpUcSzqbllXXFYZupFx2tXDGp80NE-9ued_ipNuLzqgWr4TwBNovoyFjBJVzAeNxDDZzgEjH60Sxs676BLHXXCmzA6nsWT64B9eP-MtcuC06ClwVi_R-LAeebx5aCVBrISpp1JgOTAn3HyQRM5ZzdcGzGtbQgZmEJQTP2KXSxF9tagnKqDB6og-G4Kxg4ABgVpN4_H8gplA1Y2GvxbG4CLKizru4FI0Y6iQbF1_IpFiKVdLvDNhmpumqyTBtT3he_DDRDfZa2mtD3Qi7hL1i4I7fcl6aHJPLvdlOKzcmUwOOjbeMJA-IxXWNijnWltFpvPl-SfwfFCiikzp2dJyY9_QKVRJn54QcxhCKGFbuBav6LCM6F2VgV53Eb5htSqrZdONp9_BY_GMPljrHugbJidHH6AdOC3U6sCj17XfHYgl5Qlijwj11ZmpViNlDdxGl40so15lMBmhalcOpPeVhzizmJSwmVtoVd2paGQz1tJObnuK1Uc_ztIvTpalVT-Tpgv9YMje5vxVSwGgc_DqcAYo8yIqmYPiNvJDQVAAPNxarxoUjjHLNV_xE3ZaJe-EW_7ve66q_WgCRLyL94tpOieww76VQErDxsRC8QxLqHNaYcnSnvOxvl-cw9QY8A7eUAXtWqx=w787-h661-no?authuser=2)
![create users](https://lh3.googleusercontent.com/pw/AM-JKLWOipEEuRzSDsmf5NdedrWNyu758jkUOya3bxINcW4yWMkduyFHTppcXOrGb_6L7G1dIZFbgucmT0oqOeF3J0UUiCABgtnIh9DxqMWcwy_1Et00mgZ1zqAo05vfzRQ3PaUy-Kwktk-CS-8Ld2pZuSZb=w793-h544-no)


# Amazon AppStream 

Amazon AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 provides users with instant access to the applications that they need with a responsive, fluid user experience on the device of their choice.

# Using Amazon AppStream 2.0 provides the following advantages:
Access desktop applications securely from any supported device
Secure applications and data
Consistent, scalable performance
Integrate with your IT environment

# To get the most out of AppStream 2.0, be familiar with the following concepts:
Application
An application contains the information necessary to launch the application that you want to stream to your users
Image
An image contains applications that you can stream to your users, and default system and application settings to enable your users to get started with their applications quickly. 
Fleet
A fleet consists of fleet instances (also known as streaming instances) that run the applications and desktops that you specify. 
Stack
A stack consists of an associated fleet, user access policies, and storage configurations. You set up a stack to start streaming applications to users.
Streaming instance
A streaming instance (also known as a fleet instance) is an EC2 instance that is made available to a single user for application streaming
User pool
Use the user pool to manage users and their assigned stacks.


# Step 1: Set Up a Sample Stack, Choose an Image, and Configure a Fleet
Before you can stream your applications, you need to set up a stack, choose an image that has applications installed, and configure a fleet. In this step, you use a template to help simplify these tasks.
To set up a sample stack, choose an image, and configure a fleet
# 1.	Open the AppStream 2.0 console at https://console.aws.amazon.com/appstream2.
# 2.	Choose Get Started if you are new to the console, or Quick Links from the left navigation menu. Choose Set up with sample apps.
# 3.	For Step 1: Stack Details, keep the default stack name or enter your own. Optionally, you can do the following:
•	Display name — Enter a name to display for the stack (maximum of 100 characters).
•	Description— Keep the default description or enter your own (maximum of 256 characters).
•	Redirect URL — Specify a URL to which users are redirected after their streaming sessions end.
•	Feedback URL — Specify a URL to which users are redirected after they click the Send Feedback link to submit feedback about their application streaming experience. If you do not specify a URL, this link is not displayed.
# 4.	Choose Next.
# 5.	For Step 2: Choose Image, a sample image is already selected. The image contains pre-installed open-source applications for evaluation purposes. Choose Next.
# 6.	For Step 3: Configure Fleet, we recommend that you keep any default values that are provided. You can change most of these values after fleet creation.
•	Choose instance type — Choose the instance type that matches the performance requirements of your applications. All streaming instances in your fleet launch with the instance type that you select. For more information, see AppStream 2.0 Instance Families.
•	Fleet type — Choose the fleet type that suits your use case. The fleet type determines its immediate availability and how you pay for it.
•	Maximum session duration in minutes — Choose the maximum amount of time that a streaming session can remain active.
•	Disconnect timeout in minutes — Choose the amount of time that a streaming session should remain active after users disconnect. 
If a user ends the session by choosing End Session on the streaming session toolbar, the disconnect timeout does not apply. Instead, the user is prompted to save any open documents, and then immediately disconnected from the streaming instance.
# 7.	Choose Next.
	For Step 4: Configure Network, a default VPC is provided. This VPC includes a default public subnet in each Availability Zone and an internet gateway that is attached to your VPC. The VPC also includes a default security group. To use the default VPC configuration, do the following:
•	Keep the Default Internet Access check box selected.
When Default Internet Access is enabled, a maximum of 100 fleet instances is supported. If your deployment must support more than 100 concurrent users, use the NAT gateway configuration instead.
•	For VPC, keep the default VPC selected for your AWS Region.
The default VPC name uses the following format: vpc-vpc-id (No_default_value_Name).
•	For Subnet 1 and Subnet 2, keep the default public subnets selected.
The default subnet names use the following format: subnet-subnet-id | (IPv4 CIDR block) | Default in availability-zone.
•	For Security groups, keep the default security group selected.
The default security group name uses the following format: sg-security-group-id-default.
For Step 5: Enable Storage, choose one or more of the following, then choose Next.
•	Enable Home Folders — By default, this setting is enabled. Keep the default setting. For information about requirements for enabling home folders, see Enable Home Folders for Your AppStream 2.0 Users.
•	Enable Google Drive — Optionally, you can enable users to link their Google Drive for G Suite account to AppStream 2.0. You can enable Google Drive for accounts in G Suite domains only, not for personal Gmail accounts. For information about requirements for enabling Google Drive, see Enable Google Drive for Your AppStream 2.0 Users.
•	Enable OneDrive — Optionally, you can enable users to link their OneDrive for Business account to AppStream 2.0. You can enable OneDrive for accounts in OneDrive domains only, not for personal accounts. For information about requirements for enabling OneDrive, see Enable OneDrive for Your AppStream 2.0 Users.
# 8.	For Step 6: User Settings, configure the following settings. When you're done, choose Review:
	Clipboard — By default, users can copy and paste data between their local device and streaming applications. 
# 9.	File transfer — By default, users can upload and download files between their local device and streaming session. 
# 10.	For Step 7: Review, confirm the details for the stack. To change the configuration for any section, choose Edit and make the needed changes. After you finish reviewing the configuration details, choose Create.
# 11.	In the pricing acknowledgement dialog box, select the acknowledgement check box, and choose Create.
# 12.	After the service sets up resources, the Stacks page appears. The status of your new stack appears as Active when it is ready to use.
Provide Access to Users

After you create a stack with an associated fleet, you can provide access to users through the AppStream 2.0 user pool.
# To provide access to users with a temporary URL
1.	In the navigation pane, choose Fleets.
2.	In the list of fleets, choose the fleet that is associated with the stack for which you want to create a streaming URL. Verify that the status of the fleet is       Running.
3.	In the navigation pane, choose Stacks. Select the stack, and then choose Actions, Create Streaming URL.
4.	For User id, type the user ID. Choose an expiration time, which determines how long the generated URL is valid.
5.	To view the user ID and URL, choose Get URL.
6.	To copy the link to the clipboard, choose Copy Link.
After you provide your users with access to AppStream 2.0, they can start AppStream 2.0 streaming sessions. If you provide access through the AppStream 2.0 user pool, they must use a web browser for streaming sessions.



