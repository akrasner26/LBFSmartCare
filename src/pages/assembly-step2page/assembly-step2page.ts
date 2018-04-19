import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePagePage } from '../profile-page/profile-page';
import { EnterOrderNumPagePage } from '../enter-order-num-page/enter-order-num-page';
import { ServiceChoicePagePage } from '../service-choice-page/service-choice-page';
import { RepairHomePagePage } from '../repair-home-page/repair-home-page';
import { RepairDetailsPage } from '../repair-details/repair-details';
import { AsseblyHomePagePage } from '../assebly-home-page/assebly-home-page';
import { ProblemReportPagePage } from '../problem-report-page/problem-report-page';
import { AssemblyStep1PagePage } from '../assembly-step1page/assembly-step1page';
import { WelcomePagePage } from '../welcome-page/welcome-page';

@Component({
  selector: 'page-assembly-step2page',
  templateUrl: 'assembly-step2page.html'
})
export class AssemblyStep2PagePage {

  constructor(public navCtrl: NavController) {
  }
  goToProfilePage(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePagePage);
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
}
