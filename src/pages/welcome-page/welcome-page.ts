import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import { ProfilePagePage } from '../profile-page/profile-page';
import { EnterOrderNumPagePage } from '../enter-order-num-page/enter-order-num-page';
import { ServiceChoicePagePage } from '../service-choice-page/service-choice-page';
import { RepairHomePagePage } from '../repair-home-page/repair-home-page';
import { RepairDetailsPage } from '../repair-details/repair-details';
import { AsseblyHomePagePage } from '../assebly-home-page/assebly-home-page';
import { ProblemReportPagePage } from '../problem-report-page/problem-report-page';
import { AssemblyStep1PagePage } from '../assembly-step1page/assembly-step1page';
import { AssemblyStep2PagePage } from '../assembly-step2page/assembly-step2page';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from "angularfire2/auth";
import {SignupPagePage} from "../signup-page/signup-page";
import {User} from "../../modals/users";

@Component({
  selector: 'page-welcome-page',
  templateUrl: 'welcome-page.html'
})
export class WelcomePagePage {

  user = {} as User;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, private aFAuth: AngularFireAuth, public alertCtrl: AlertController) {
	//this.db.list('/Test').push("Rachel");
  }
  async goToProfilePage(user: User){
    // try{
    console.log(typeof(user.email));

    // if (user.email  == ''){
    //     let alert = this.alertCtrl.create({
    //       title: "Error",
    //       message: 'Please check your input',
    //       buttons:["OK"]
    //     });
    //     alert.present();
    //   }
      const result = this.aFAuth.auth.signInWithEmailAndPassword(user.email, user.password);

      result.then(data => {
        console.log(data);
        if(data.email == user.email){
          this.navCtrl.setRoot(ProfilePagePage);

        }





        // if(data.code == 'auth/invalid-email' || data.code == 'auth/user-not-found'){
                //
                //   console.log(data.code);
                //
                //   let alert = this.alertCtrl.create({
                //     title: "Error",
                //     message: "Invalid email/password",
                //     buttons:["OK"]
                //   });
                //   alert.present();
                // }

      },error=> {
        console.log(error.message);
        let alert = this.alertCtrl.create({
              title: "Error",
      message: error.message,
      buttons:["OK"]
  });
  alert.present();
}
      );


  }goToEnterOrderNumPage(params){
    if (!params) params = {};
    this.navCtrl.push(EnterOrderNumPagePage);
  }goToServiceChoicePage(params){
    if (!params) params = {};
    this.navCtrl.push(ServiceChoicePagePage);
  }goToRepairHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(RepairHomePagePage);
  }goToRepairDetails(params){
    if (!params) params = {};
    this.navCtrl.push(RepairDetailsPage);
  }goToAsseblyHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(AsseblyHomePagePage);
  }goToProblemReportPage(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemReportPagePage);
  }goToAssemblyStep1Page(params){
    if (!params) params = {};
    this.navCtrl.push(AssemblyStep1PagePage);
  }goToAssemblyStep2Page(params){
    if (!params) params = {};
    this.navCtrl.push(AssemblyStep2PagePage);
  }goToWelcomePage(params){
    if (!params) params = {};
    this.navCtrl.push(WelcomePagePage);
  }

  goToSignupPage(){
    this.navCtrl.push(SignupPagePage);
  }
}
