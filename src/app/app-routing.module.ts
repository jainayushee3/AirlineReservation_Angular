import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { AdminFlightsComponent } from './adminflights/adminflights.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from './auth.guard';
import { BookedticketComponent } from './bookedticket/bookedticket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteFlightsComponent } from './delete-flights/delete-flights.component';
import { DeleteScheduleComponent } from './delete-schedule/delete-schedule.component';
import { FlightComponent } from './flight/flight.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightstwoComponent } from './flightstwo/flightstwo.component';
import { LoginComponent } from './login/login.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { SearchcardComponent } from './searchcard/searchcard.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TwowayticketComponent } from './twowayticket/twowayticket.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { ViewSchedulesComponent } from './view-schedules/view-schedules.component';

const routes: Routes = [
  {path: '', component:SearchcardComponent},
  {path: 'flights', component:FlightsComponent},
  {path: 'flightstwo', component:FlightstwoComponent},
  {path: 'tickets', component:TicketsComponent, canActivate:[AuthGuard]},
  {path: 'passengerdetails', component:PassengersDetailsComponent, canActivate:[AuthGuard]},
  {path: 'payment', component:PaymentComponent, canActivate:[AuthGuard]} ,
  {path: 'seatselection', component:SeatselectionComponent, canActivate:[AuthGuard]},
  {path: 'twowaytickets', component:TwowayticketComponent, canActivate:[AuthGuard]},
  {path: 'bookedticket', component:BookedticketComponent, canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:"AdminLogin",component: AdminloginComponent},
  {path:"AdminFlights",component: AdminFlightsComponent},
  {path:"Schedules",component: SchedulesComponent},
  {path:"AdminFlights/ViewFlights", component: ViewFlightsComponent},
  {path:"AdminFlights/AddFlights", component: AddFlightComponent},
  {path:"AdminFlights/UpdateFlights", component: UpdateFlightComponent},
  {path:"AdminFlights/DeleteFlights", component: DeleteFlightsComponent},
  {path:"Schedules/ViewSchedules", component:ViewSchedulesComponent},
  {path:"Schedules/AddSchedule", component: AddScheduleComponent},
  {path:"Schedules/UpdateSchedule", component: UpdateScheduleComponent} ,
  {path:"Schedules/DeleteSchedule", component: DeleteScheduleComponent} ,
  {path:"Dashboard", component:DashboardComponent},
  {path:"ResetPassword", component:ResetpasswordComponent},
  {path: "checkout", component:CheckoutComponent, canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FlightComponent];