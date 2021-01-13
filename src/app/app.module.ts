import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchcardComponent } from './searchcard/searchcard.component';
import { FlightSearch } from './services/flightsearch.services';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { FlightComponent } from './flight/flight.component';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeatLayoutComponent } from './seat-layout/seat-layout.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightstwoComponent } from './flightstwo/flightstwo.component';
import { FlighttoComponent } from './flightto/flightto.component';
import { FlightfromComponent } from './flightfrom/flightfrom.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { TwowayticketComponent } from './twowayticket/twowayticket.component';
import { BookedticketComponent } from './bookedticket/bookedticket.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminserviceService } from './services/adminservice.service';
import { ScheduleService } from './services/schedule.service';
import { FlightService } from './services/flight.service';
import { AdminFlightsComponent } from './adminflights/adminflights.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { ViewSchedulesComponent } from './view-schedules/view-schedules.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { DeleteFlightsComponent } from './delete-flights/delete-flights.component';
import { DeleteScheduleComponent } from './delete-schedule/delete-schedule.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardService } from './services/dashboard.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TicketBooking } from './services/TicketBooking.services';
import { CheckoutComponent } from './checkout/checkout.component';
//import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchcardComponent,
    PaymentComponent,
    FlightComponent,
    routingComponents,
    SeatLayoutComponent,
    FlightsComponent,
    FlightstwoComponent,
    FlighttoComponent,
    FlightfromComponent,    
    TicketsComponent,
    PassengersDetailsComponent,
    PassengerDetailsComponent,
    SeatselectionComponent,
    TwowayticketComponent,
    BookedticketComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminFlightsComponent,
    SchedulesComponent,
    ViewFlightsComponent,
    ViewSchedulesComponent,
    AddFlightComponent,
    AddScheduleComponent,
    UpdateFlightComponent,
    UpdateScheduleComponent,
    DeleteFlightsComponent,
    DeleteScheduleComponent,
    AdminHeaderComponent,
    HeaderLinksComponent,
    AdminloginComponent,
    ResetpasswordComponent,
    CheckoutComponent
    //ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [FlightSearch, UserService, AuthGuard, AdminserviceService, ScheduleService, FlightService, DashboardService,TicketBooking],
  bootstrap: [AppComponent]
})
export class AppModule { }
