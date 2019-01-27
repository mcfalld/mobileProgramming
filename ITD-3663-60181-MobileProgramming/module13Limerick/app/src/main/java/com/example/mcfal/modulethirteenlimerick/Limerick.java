package com.example.mcfal.modulethirteenlimerick;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import org.w3c.dom.Text;

public class Limerick extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_limerick);

        SharedPreferences sharedPref = PreferenceManager.getDefaultSharedPreferences(this);

        String stringCity = sharedPref.getString("key1", "DEFAULT");
        String stringOccupation = sharedPref.getString("key2", "DEFAULT");
        int intNumber = sharedPref.getInt("key3", 0);
        String stringActionVerb = sharedPref.getString("key4", "DEFAULT");

        TextView poem = findViewById(R.id.txtPoem);
        poem.append((getString(R.string.txtLimerick1a)));
        poem.append(" " + stringCity + " ");
        poem.append(getString(R.string.txtLimerick1b));
        poem.append("\n");

        poem.append((getString(R.string.txtLimerick2a)));
        poem.append(" " + stringOccupation + " ");
        poem.append(getString(R.string.txtLimerick2b));
        poem.append("\n");

        poem.append((getString(R.string.txtLimerick3a)));
        poem.append(" " + Integer.toString(intNumber) + " ");
        poem.append(getString(R.string.txtLimerick3b));
        poem.append("\n");

        poem.append((getString(R.string.txtLimerick4)));
        poem.append("\n");

        poem.append((getString(R.string.txtLimerick5a)));
        poem.append(" " + stringActionVerb + " ");
        poem.append(getString(R.string.txtLimerick5b));
//        poem.append("\n");

    }
}
