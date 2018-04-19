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
import { WelcomePagePage } from '../welcome-page/welcome-page';
import * as firebase from "firebase";
import {User} from "../../modals/users";
import { AngularFireAuth} from "angularfire2/auth";
@Component({
  selector: 'page-signup-page',
  templateUrl: 'signup-page.html'
})
export class SignupPagePage {
  user = {} as User;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public alertCtrl: AlertController) {
    //  var Eiman = "eimanahmed96@gmail.com";
    //  var EimanPass = "password";
    // firebase.auth().createUserWithEmailAndPassword(Eiman, EimanPass).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log("EIMAN LOOK HERE" + errorMessage);
    // });
  }

  async goToProfilePage(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        this.navCtrl.push(ProfilePagePage);
      }
    }
    catch(e){
      console.log(e)
    }
     //if (!params) params = {};
     //this.navCtrl.push(ProfilePagePage);
  }


  goToEnterOrderNumPage(params){
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
}
