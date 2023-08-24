import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepresentanteLegalComponent } from 'src/components/legal-representative/legal-representative.component';
import { ProviderComponent } from 'src/components/provider/provider.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InformationTributaryComponent } from 'src/components/information-tributary/information-tributary.component';
import { InformationBankingComponent } from 'src/components/information-banking/information-banking.component';
import { contactsComponent } from 'src/components/contacts/contacts.component';
import { ComplianceRegulatoryComponent } from 'src/components/compliance-regulatory/compliance-regulatory.component';
import { DocumentationRequirementcomponent } from 'src/components/documentation-requirements/documentation-require.component';
import { AdministratorDirectorShareolderComponent } from 'src/components/administrator-director-shareolder/administrator-director-shareolder.component';
import { ConfirmComponent } from 'src/components/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    RepresentanteLegalComponent,
    ProviderComponent,
    InformationTributaryComponent,
    InformationBankingComponent,
    contactsComponent,
    ComplianceRegulatoryComponent,
    DocumentationRequirementcomponent,
    AdministratorDirectorShareolderComponent,
    ConfirmComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
