package com.github.uryyyyyyy.reactnative.android.myModules

import android.os.Bundle
import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.UiThreadUtil
import com.facebook.react.common.MapBuilder
import com.google.firebase.analytics.FirebaseAnalytics

class MyToastModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MyToastModule"
    }

    override fun getConstants(): Map<String, Any>? {
        val constants = MapBuilder.newHashMap<String, Any>()
        constants.put("SHORT", Toast.LENGTH_SHORT)
        constants.put("LONG", Toast.LENGTH_LONG)
        return constants
    }

    @ReactMethod
    fun show(message: String, duration: Int) {
        Log.i("myActivitysssss", "toast")
        UiThreadUtil.runOnUiThread { Toast.makeText(reactApplicationContext, message, duration).show() }
    }

    @ReactMethod
    fun sendEvent() {
        val mFirebaseAnalytics = FirebaseAnalytics.getInstance(reactApplicationContext)
        val bundle = Bundle()
        bundle.putString(FirebaseAnalytics.Param.ITEM_ID, "id")
        bundle.putString(FirebaseAnalytics.Param.ITEM_NAME, "name")
        bundle.putString(FirebaseAnalytics.Param.CONTENT_TYPE, "image")
        Log.i("myActivitysssss", mFirebaseAnalytics.toString())
        mFirebaseAnalytics.logEvent(FirebaseAnalytics.Event.SELECT_CONTENT, bundle)
    }
}