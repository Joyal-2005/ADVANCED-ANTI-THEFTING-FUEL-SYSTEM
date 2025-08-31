# ADVANCED-ANTI-THEFTING-FUEL-SYSTEM
#include<SoftwareSerial.h>
SoftwareSerial mySerial(7,6);
int fuel,last_fuel;
int key;
void setup() {
 Serial.begin(9600);
 mySerial.begin(9600);
 pinMode(A0,INPUT);
 pinMode(2,INPUT_PULLUP);
} 
void loop() { 
  
  key=digitalRead(2);  // reading the key value
  fuel=analogRead(A0); // reading the fuel level 
  fuel=constrain(fuel,460,820);
  fuel=map(fuel,820,460,100,0);

  if(key==1){  // here key value 1 =  OFF mode // key value =0  ON mode
    if(fuel<last_fuel){  // here we check the (compare ) fuel level from the level when we stop the vehicle
    sms();
    Serial.println("Fuel Theft Detected");
    delay(3000);
    }
    else{
    Serial.println("No Theft Detected");
    }
  }
  else{
    last_fuel=fuel;  // here we update the fuel level when we stop the bike the last_fuel will get the value of fuel level
  }
  Serial.print("fuel = ");
  Serial.println(fuel);
  Serial.print("last_fuel = ");
  Serial.println(last_fuel);
  delay(200);

}
void sms(){
  mySerial.println("AT+CMGF=1");    //Sets the GSM Module in Text Mode
  delay(1000);  // Delay of 1000 milli seconds or 1 second
  mySerial.println("AT+CMGS=\"+919787956419\"\r"); // Replace x with mobile number
  delay(1000);
  mySerial.println("Fuel Theft Detected");// The SMS text you want to send
  delay(100);
   mySerial.println((char)26);// ASCII code of CTRL+Z
  delay(1000);
  }
