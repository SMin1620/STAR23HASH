import 'package:flutter/material.dart';
import 'package:contacts_service/contacts_service.dart';
import 'package:flutter/services.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:dio/dio.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => new _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late InAppWebViewController _webViewController;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: InAppWebViewPage(),
    );
  }
}

class InAppWebViewPage extends StatefulWidget {
  @override
  _InAppWebViewPageState createState() => new _InAppWebViewPageState();
}


class _InAppWebViewPageState extends State<InAppWebViewPage> {
  late InAppWebViewController _webViewController;

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      body: Container(
        child: Column(
          children: <Widget>[
            Expanded(
              child: Container(
                child: InAppWebView(
                    initialUrlRequest: URLRequest(
                      url: Uri.parse("http://k9e106.p.ssafy.io:3000/auth/loginMain"),
                    ),
                    initialOptions: InAppWebViewGroupOptions(
                      crossPlatform: InAppWebViewOptions(
                        mediaPlaybackRequiresUserGesture: false,
                        javaScriptEnabled: true,
                      ),
                    ),
                    onWebViewCreated: (controller) {
                      _webViewController = controller;
                    },
                    androidOnPermissionRequest:
                        (InAppWebViewController controller, String origin, List<String> resources) async {
                      return PermissionRequestResponse(
                        resources: resources,
                        action: PermissionRequestResponseAction.GRANT,
                      );
                    },
                    onLoadStop: (controller, url) async {
                      Uri? currentUrl = await _webViewController.getUrl();
                      print(currentUrl.toString());

                      if (url.toString() == "http://k9e106.p.ssafy.io:3000/write/wfriend/pullfriend") {
                        // List<Contact> contacts = [];
                        // PermissionStatus status = await Permission.contacts.request();
                        // if (status.isGranted) {
                        //   try {
                        //     Iterable<Contact> contactList = await ContactsService.getContacts();
                        //     setState(() {
                        //       contacts = contactList.toList();
                        //       print("contact");
                        //       print(contacts);
                        //
                        //       sendContactsToServer(contacts);
                        //     });
                        //   } on PlatformException catch (e) {
                        //     print('Error: ${e.message}');
                        //   }
                        // }
                        // controller.loadUrl(
                        //   urlRequest: URLRequest(
                        //     url: Uri.parse("http://k9e106.p.ssafy.io:3000/write/wfriend/getfriend"),
                        //   ),
                        // );
                      }
                    }
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

void sendContactsToServer(List<Contact> contacts) async {
  List<Map<String, String>> contactList = contacts.map((contact) {
    String name = contact.displayName ?? '';
    String phoneNumber = contact.phones?.first.value ?? '';
    phoneNumber = phoneNumber.replaceAll(RegExp(r'[^0-9]'), '');
    return {
      'name': name,
      'phone': phoneNumber,
    };
  }).toList();
  var cookieManager = CookieManager.instance();
  var accessToken = await cookieManager.getCookie(url: Uri.parse("http://k9e106.p.ssafy.io:3000/write"), name: "accessToken");
  if (accessToken != null) {
    var accessTokenValue = accessToken.value;
    var dio = Dio();
    dio.options.headers['Authorization'] = '$accessTokenValue';
    dio.options.headers['Cookie'] = accessToken.toString();
    try {
      var response = await dio.post(
        'http://k9e106.p.ssafy.io:9000/api/letters/contact',
        data: {'contacts': contactList},
      );
      if (response.statusCode == 200) {
        print('Contacts sent to server');
      } else {
        print('Failed to send contacts to server');
      }
    } catch (e) {
      print('Error: $e');
    }
    // 이후 원하는 작업을 수행할 수 있습니다.
  } else {
    print('accessToken이 없습니다.');
  }
}