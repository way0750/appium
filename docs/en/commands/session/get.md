# Get Session Capabilities

Retrieve the capabilities of the specified
## Example Usage

```java
// Java
DriverSessions driverSessions = new DriverSessions();
Session session = driverSessions.get("c8db88a0-47a6-47a1-802d-164d746c06aa");

```

```python
# Python
desired_caps = self.driver.desired_capabilities()

```

```javascript
// Javascript
// webdriver.io example
let caps = driver.session('c8db88a0-47a6-47a1-802d-164d746c06aa');


// wd example
let caps = await driver.sessionCapabilities('c8db88a0-47a6-47a1-802d-164d746c06aa');

```

```ruby
# Ruby
# Private method. Do not use.

```

```php
# PHP
// TODO PHP sample

```

```csharp
// C#
// TODO C# sample

```



## Client Docs

 * [Java](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/remote/server/DefaultDriverSessions.html#get-org.openqa.selenium.remote.SessionId-) 
 * [Python](http://selenium-python.readthedocs.io/api.html#selenium.webdriver.remote.webdriver.WebDriver.desired_capabilities) 
 * [Javascript (WebdriverIO)](http://webdriver.io/api/protocol/session.html) 
 * [Javascript (WD)](https://github.com/admc/wd/blob/master/lib/commands.js#L227) 
 * [Ruby](http://www.rubydoc.info/gems/selenium-webdriver/Selenium%2FWebDriver%2FRemote%2FOSS%2FBridge:session_capabilities) 
 * [PHP](https://github.com/appium/php-client/) 
 * [C#](https://github.com/appium/appium-dotnet-driver/) 

## Support

### Appium Server

|Platform|Driver|Platform Versions|Appium Version|Driver Version|
|--------|----------------|------|--------------|--------------|
| iOS | [XCUITest](/docs/en/drivers/ios-xcuitest.md) | 9.3+ | 1.6.0+ | All |
|  | [UIAutomation](/docs/en/drivers/ios-uiautomation.md) | 8.0 to 9.3 | All | All |
| Android | [UiAutomator2](/docs/en/drivers/android-uiautomator2.md) | ?+ | 1.6.0+ | All |
|  | [UiAutomator](/docs/en/drivers/android-uiautomator.md) | 4.2+ | All | All |
| Mac | [Mac](/docs/en/drivers/mac.md) | ?+ | 1.6.4+ | All |
| Windows | [Windows](/docs/en/drivers/windows.md) | 10+ | 1.6.0+ | All |

### Appium Clients 

|Language|Support|
|--------|-------|
|[Java](https://github.com/appium/java-client/releases/latest)| All |
|[Python](https://github.com/appium/python-client/releases/latest)| All |
|[Javascript (WebdriverIO)](http://webdriver.io/index.html)| All |
|[Javascript (WD)](https://github.com/admc/wd/releases/latest)| All |
|[Ruby](https://github.com/appium/ruby_lib/releases/latest)| All |
|[PHP](https://github.com/appium/php-client/releases/latest)| All |
|[C#](https://github.com/appium/appium-dotnet-driver/releases/latest)| All |

## HTTP API Specifications

### Endpoint

`GET /session/:session_id`

### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session to route the command to|

### JSON Parameters

None

### Response

An object describing the session's capabilities (object)

## See Also

* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionid)
