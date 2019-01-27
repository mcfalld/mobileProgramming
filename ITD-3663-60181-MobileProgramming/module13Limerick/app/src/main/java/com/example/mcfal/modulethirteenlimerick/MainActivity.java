package com.example.mcfal.modulethirteenlimerick;

import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {
    String stringCity;
    String stringOccupation;
    int intNumber;
    String stringActionVerb;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText city = findViewById(R.id.txtInputCity);
        final EditText occupation = findViewById(R.id.txtInputOccupation);
        final EditText number = findViewById(R.id.txtInputNumber);
        final EditText actionVerb = findViewById(R.id.txtInputActionVerb);

        Button button = findViewById(R.id.btnSubmit);

        final SharedPreferences sharedPref = PreferenceManager.getDefaultSharedPreferences(this);

        button.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
          {
              stringCity = city.getText().toString();
              stringOccupation = occupation.getText().toString();
              intNumber = Integer.parseInt(number.getText().toString());
              stringActionVerb = actionVerb.getText().toString();
              SharedPreferences.Editor editor = sharedPref.edit();
              editor.putString("key1", stringCity);
              editor.putString("key2", stringOccupation);
              editor.putInt("key3", intNumber);
              editor.putString("key4", stringActionVerb);
              editor.apply();
              startActivity(new Intent(MainActivity.this, Limerick.class));
          }

        });

    }


}
