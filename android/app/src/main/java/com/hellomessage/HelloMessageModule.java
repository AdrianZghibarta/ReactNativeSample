// - That's HelloMessageModule.java file
package com.hellomessage;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

class HelloMessageModule extends ReactContextBaseJavaModule {

    HelloMessageModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "HelloMessage";// <- JS name of your module
    }

    @ReactMethod
    public void getGeneralMessage(Callback callback) {
        // - Callback implementation
        callback.invoke(null, "This is general message from Android");
    }

    @ReactMethod
    public void getHelloMessage(String username, Promise promise) {
        // - Promise implementation
        if (username != null) {
            promise.resolve("Hello " + username +  ", I am Android!");
        }
        else {
            promise.reject("no_name", "No name was provided");
        }
    }
}
