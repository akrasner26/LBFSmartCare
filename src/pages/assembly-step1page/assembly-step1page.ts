import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsseblyHomePagePage } from '../assebly-home-page/assebly-home-page';
import { ProblemReportPagePage } from '../problem-report-page/problem-report-page';
import { ServiceChoicePagePage } from '../service-choice-page/service-choice-page';
import { EnterOrderNumPagePage } from '../enter-order-num-page/enter-order-num-page';
import { ProfilePagePage } from '../profile-page/profile-page';
import { WelcomePagePage } from '../welcome-page/welcome-page';
import { RepairHomePagePage } from '../repair-home-page/repair-home-page';
import { RepairDetailsPage } from '../repair-details/repair-details';
import { AssemblyStep2PagePage } from '../assembly-step2page/assembly-step2page';

@Component({
  selector: 'page-assembly-step1page',
  templateUrl: 'assembly-step1page.html'
})
export class AssemblyStep1PagePage {

  constructor(public navCtrl: NavController) {
  }
  goToAsseblyHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(AsseblyHomePagePage);
  }goToProblemReportPage(params){
    if (!params) params = {};
    this.navCtrl.push(ProblemReportPagePage);
  }goToServiceChoicePage(params){
    if (!params) params = {};
    this.navCtrl.push(ServiceChoicePagePage);
  }goToEnterOrderNumPage(params){
    if (!params) params = {};
    this.navCtrl.push(EnterOrderNumPagePage);
  }goToProfilePage(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePagePage);
  }goToWelcomePage(params){
    if (!params) params = {};
    this.navCtrl.push(WelcomePagePage);
  }goToRepairHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(RepairHomePagePage);
  }goToRepairDetails(params){
    if (!params) params = {};
    this.navCtrl.push(RepairDetailsPage);
  }goToAssemblyStep1Page(params){
    if (!params) params = {};
    this.navCtrl.push(AssemblyStep1PagePage);
  }goToAssemblyStep2Page(params){
    if (!params) params = {};
    this.navCtrl.push(AssemblyStep2PagePage);
  }
}
