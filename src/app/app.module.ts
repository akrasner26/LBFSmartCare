import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePagePage } from '../pages/welcome-page/welcome-page';
import { SignupPagePage } from '../pages/signup-page/signup-page';
import { ProfilePagePage } from '../pages/profile-page/profile-page';
import { EnterOrderNumPagePage } from '../pages/enter-order-num-page/enter-order-num-page';
import { ServiceChoicePagePage } from '../pages/service-choice-page/service-choice-page';
import { RepairHomePagePage } from '../pages/repair-home-page/repair-home-page';
import { RepairDetailsPage } from '../pages/repair-details/repair-details';
import { AssemblyStep1PagePage } from '../pages/assembly-step1page/assembly-step1page';
import { AssemblyStep2PagePage } from '../pages/assembly-step2page/assembly-step2page';
import { AsseblyHomePagePage } from '../pages/assebly-home-page/assebly-home-page';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {ProblemReportPagePage} from "../pages/problem-report-page/problem-report-page";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
export const firebaseConfig =  {
    apiKey: "AIzaSyAuqDZ9L2kTfZYqho79fY_0AST-KzoWaY8",
    authDomain: "lbfsmartcare.firebaseapp.com",
    databaseURL: "https://lbfsmartcare.firebaseio.com",
    projectId: "lbfsmartcare",
    storageBucket: "lbfsmartcare.appspot.com",
    messagingSenderId: "754040275734"
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePagePage,
    SignupPagePage,
    ProfilePagePage,
    EnterOrderNumPagePage,
    ServiceChoicePagePage,
    RepairHomePagePage,
    RepairDetailsPage,
    AssemblyStep1PagePage,
    AssemblyStep2PagePage,
    AsseblyHomePagePage,
    ProblemReportPagePage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePagePage,
    SignupPagePage,
    ProfilePagePage,
    EnterOrderNumPagePage,
    ServiceChoicePagePage,
    RepairHomePagePage,
    RepairDetailsPage,
    AssemblyStep1PagePage,
    AssemblyStep2PagePage,
    AsseblyHomePagePage,
    ProblemReportPagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
