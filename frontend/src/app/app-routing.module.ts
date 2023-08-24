import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentanteLegalComponent } from '../components/legal-representative/legal-representative.component';
import { ProviderComponent } from '../components/provider/provider.component';
import { InformationTributaryComponent } from 'src/components/information-tributary/information-tributary.component';
import { InformationBankingComponent } from 'src/components/information-banking/information-banking.component';
import { DocumentationRequirementcomponent } from 'src/components/documentation-requirements/documentation-require.component';
import { contactsComponent } from 'src/components/contacts/contacts.component';
import { AdministratorDirectorShareolderComponent } from 'src/components/administrator-director-shareolder/administrator-director-shareolder.component';
import { ComplianceRegulatoryComponent } from 'src/components/compliance-regulatory/compliance-regulatory.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ConfirmComponent } from 'src/components/confirm/confirm.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  { path: 'provider', component: ProviderComponent },
  { path: 'legal-representative/:providerId', component: RepresentanteLegalComponent },
  { path: 'information-tributary/:providerId', component: InformationTributaryComponent },
  {path: 'information-banking/:providerId',component: InformationBankingComponent},
  {path: 'documentation-requirement/:providerId',component: DocumentationRequirementcomponent},
  {path: 'contacts/:providerId', component: contactsComponent},
  {path: 'compliance-regulatory/:providerId', component: ComplianceRegulatoryComponent},
  {path: 'admin-director-shareholder/:providerId', component: AdministratorDirectorShareolderComponent},
  {path: 'dataForm/:providerId',component: ConfirmComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
