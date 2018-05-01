import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnterOrderNumPagePage } from '../enter-order-num-page/enter-order-num-page';
import { ServiceChoicePagePage } from '../service-choice-page/service-choice-page';
import { RepairHomePagePage } from '../repair-home-page/repair-home-page';
import { RepairDetailsPage } from '../repair-details/repair-details';
import { AsseblyHomePagePage } from '../assebly-home-page/assebly-home-page';
import { ProblemReportPagePage } from '../problem-report-page/problem-report-page';
import { AssemblyStep1PagePage } from '../assembly-step1page/assembly-step1page';
import { AssemblyStep2PagePage } from '../assembly-step2page/assembly-step2page';
import { WelcomePagePage } from '../welcome-page/welcome-page';
import { AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html'
})
export class ProfilePagePage {

  constructor(public navCtrl: NavController, private aFAuth: AngularFireAuth,public db: AngularFireDatabase) {

  }

  ionViewWillLoad(){

  }
  goToEnterOrderNumPage(params){
    if (!params) params = {};
    this.navCtrl.push(EnterOrderNumPagePage);
  }
  goToProfilePage(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePagePage);
  }
  goToServiceChoicePage(params){
    if (!params) params = {};
    this.navCtrl.push(ServiceChoicePagePage);
  }
  goToRepairHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(RepairHomePagePage);
  }
  goToRepairDetails(params){
    if (!params) params = {};
    this.navCtrl.push(RepairDetailsPage);
  }
  goToAsseblyHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(AsseblyHomePagePage);
  }
  goToProblemReportPage(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemReportPagePage);
  }
  goToAssemblyStep1Page(params){
    if (!params) params = {};
    this.navCtrl.push(AssemblyStep1PagePage);
  }
  goToAssemblyStep2Page(params){
    if (!params) params = {};
    this.navCtrl.push(AssemblyStep2PagePage);
  }
  goToWelcomePage(){

      this.aFAuth.auth.signOut();
      this.navCtrl.push(WelcomePagePage);

  }

}
