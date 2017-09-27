# Switch to Frame

Change focus to another frame on the page (Web context only)
## Example Usage

```java
// Java
driver.switchTo().frame(3);

```

```python
# Python
self.driver.switch_to.frame(3)

```

```javascript
// Javascript
// webdriver.io example
driver.frame(3);



// wd example
await driver.frame(3);

```

```ruby
# Ruby
@driver.switch_to.frame(3)

```

```php
# PHP
// TODO PHP sample

```

```csharp
// C#
// TODO C# sample

```


## Description

If the frame id is null, the server should switch to the page's default content


## Client Docs

 * [Java](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebDriver.TargetLocator.html#frame-int-) 
 * [Python](http://selenium-python.readthedocs.io/api.html#selenium.webdriver.remote.webdriver.WebDriver.switch_to_frame) 
 * [Javascript (WebdriverIO)](http://webdriver.io/api/protocol/frame.html) 
 * [Javascript (WD)](https://github.com/admc/wd/blob/master/lib/commands.js#L332) 
 * [Ruby](http://www.rubydoc.info/gems/selenium-webdriver/Selenium/WebDriver/Remote/W3C/Bridge:switch_to_frame) 
 * [PHP](https://github.com/appium/php-client/) 
 * [C#](https://github.com/appium/appium-dotnet-driver/) 

## Support

### Appium Server

|Platform|Driver|Platform Versions|Appium Version|Driver Version|
|--------|----------------|------|--------------|--------------|
| iOS | [XCUITest](/docs/en/drivers/ios-xcuitest.md) | None | None | None |
|  | [UIAutomation](/docs/en/drivers/ios-uiautomation.md) | None | None | None |
| Android | [UiAutomator2](/docs/en/drivers/android-uiautomator2.md) | None | None | None |
|  | [UiAutomator](/docs/en/drivers/android-uiautomator.md) | None | None | None |
| Mac | [Mac](/docs/en/drivers/mac.md) | None | None | None |
| Windows | [Windows](/docs/en/drivers/windows.md) | None | None | None |

### Appium Clients 

|Language|Support|
|--------|-------|
|[Java](https://github.com/appium/java-client/releases/latest)| None |
|[Python](https://github.com/appium/python-client/releases/latest)| None |
|[Javascript (WebdriverIO)](http://webdriver.io/index.html)| None |
|[Javascript (WD)](https://github.com/admc/wd/releases/latest)| None |
|[Ruby](https://github.com/appium/ruby_lib/releases/latest)| None |
|[PHP](https://github.com/appium/php-client/releases/latest)| None |
|[C#](https://github.com/appium/appium-dotnet-driver/releases/latest)| None |

## HTTP API Specifications

### Endpoint

`POST /wd/hub/session/:session_id/frame`

### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session to route the command to|

### JSON Parameters

|name|type|description|
|----|-----------|
| id | string|number|null|WebElement JSON Object | Identifier for the frame to change focus to. |

### Response

null

## See Also

* [W3C Specification](https://www.w3.org/TR/webdriver/#dfn-switch-to-frame)
* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidurl)
