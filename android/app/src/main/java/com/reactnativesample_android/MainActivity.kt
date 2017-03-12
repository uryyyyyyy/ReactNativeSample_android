package com.reactnativesample_android

import com.facebook.react.ReactActivity

class MainActivity : ReactActivity() {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    protected override fun getMainComponentName(): String? {
        return "ReactNativeSample_android"
    }
}
