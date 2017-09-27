# Take Screenshot

Take a screenshot of the current viewport/window/page
## Example Usage

```java
// Java
File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);

```

```python
# Python
screenshotBase64 = self.driver.get_screenshot_as_base64()

```

```javascript
// Javascript
// webdriver.io example
let screenshot = driver.screenshot();



// wd example
let screenshot = await driver.takeScreenshot();

```

```ruby
# Ruby
@driver.screenshot_as(:base64)

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

 * [Java](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/remote/RemoteWebDriver.html#getScreenshotAs-org.openqa.selenium.OutputType-) 
 * [Python](http://selenium-python.readthedocs.io/api.html#selenium.webdriver.remote.webdriver.WebDriver.get_screenshot_as_base64) 
 * [Javascript (WebdriverIO)](http://webdriver.io/api/protocol/screenshot.html) 
 * [Javascript (WD)](https://github.com/admc/wd/blob/master/lib/commands.js#L1089) 
 * [Ruby](http://www.rubydoc.info/gems/selenium-webdriver/Selenium/WebDriver/DriverExtensions/TakesScreenshot) 
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

`GET /wd/hub/session/:session_id/screenshot`

### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session to route the command to|

### JSON Parameters

None

### Response

The screenshot as a base64 encoded PNG (string)

## See Also

* [W3C Specification](https://www.w3.org/TR/webdriver/#dfn-take-screenshot)
* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidscreenshot)
