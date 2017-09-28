# Button Up

Releases the mouse button previously held
## Example Usage

```java
// Java
Actions action = new Actions(driver);
action.moveTo(element);
action.clickAndHold();
action.moveTo(element, 10, 10);
action.release();
action.perform();

```

```python
# Python
actions = ActionChains(driver)
actions.move_to_element(element)
actions.click_and_hold()
actions.move_to_element(element, 10, 10)
action.release();
actions.perform()

```

```javascript
// Javascript
// webdriver.io example
driver.moveTo(element)
  .buttonDown()
  .moveTo(element, 10, 10)
  .buttonUp();



// wd example
await driver.moveTo(element);
await driver.buttonDown();
await driver.moveTo(element, 10, 10);
await driver.buttonUp();

```

```ruby
# Ruby
@driver.action.click_and_hold(el).move_to(el, 10, 10).release.perform

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

Must be called once for every buttondown command issued. See the note in click and buttondown about implications of out-of-order commands.


## Client Docs

 * [Java](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html#clickAndHold--) 
 * [Python](http://selenium-python.readthedocs.io/api.html#selenium.webdriver.common.action_chains.ActionChains.release) 
 * [Javascript (WebdriverIO)](http://webdriver.io/api/protocol/buttonUp.html) 
 * [Javascript (WD)](https://github.com/admc/wd/blob/master/lib/commands.js#L1645) 
 * [Ruby](http://www.rubydoc.info/gems/selenium-webdriver/Selenium/WebDriver/ActionBuilder:release) 
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

`POST /session/:session_id/buttonup`

### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session to route the command to|

### JSON Parameters

|name|type|description|
|----|----|-----------|
| button | number | Which button, {LEFT = 0, MIDDLE = 1 , RIGHT = 2}. Defaults to the left mouse button if not specified |

### Response

null

## See Also

* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttonup)
