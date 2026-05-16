import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private url = 'http://localhost:3001';

    constructor(private http: HttpClient) {
        console.log("Call Constructor..");
    }

    // normal data
    getdata() {
        return this.http.get(this.url + "/read");
    }

    // register insert
    regsubmit(data: any) {
        return this.http.post(this.url + "/reginsert", data);
    }

    // register read
    getregdata() {
        return this.http.get(this.url + "/regread");
    }

    // login
    getlogdata(email: string, password: string) {
        return this.http.get(this.url + "/logdata?email=" + email + "&password=" + password);
    }

    // delete user
    regdelete(id: any) {
        return this.http.get(this.url + "/regdelete?id=" + id);
    }

    // search user
    regsearch(id: any) {
        return this.http.get(this.url + "/regsearch?id=" + id);
    }

    // update user
    userupdate(data: any, id: any) {
        return this.http.post(this.url + "/regupdate?id=" + id, data);
    }

    // city + volunteer
    getCities() {
        return this.http.get(this.url + "/cityvolunteer");
    }

    // insert donation
    insertDonation(data: any) {
        return this.http.post(this.url + "/donationinsert", data);
    }

    // get all donations
    getDonations() {
        return this.http.get(this.url + "/donations");
    }

    // update donation status
    updateDonationStatus(
        id: any,
        status: any,
        volunteer?: any,
        email?: any,
        contact?: any,
        date?: any
    ) {

        let api = this.url + "/donationstatus?id=" + id + "&status=" + status;

        if (volunteer) {
            api += "&volunteer=" + volunteer;
        }

        if (email) {
            api += "&email=" + email;
        }

        if (contact) {
            api += "&contact=" + contact;
        }

        if (date) {
            api += "&collectionDate=" + date;
        }

        return this.http.get(api);

    }

    // user donation history
    getUserDonations(userid: any) {
        return this.http.get(this.url + "/userdonations?userid=" + userid);
    }

    // add volunteer
    addVolunteer(data: any) {
        return this.http.post(this.url + "/addvolunteer", data);
    }

    // get volunteers
    getVolunteers() {
        return this.http.get(this.url + "/volunteers");
    }

    // delete volunteer
    deleteVolunteer(id: any) {
        return this.http.get(this.url + "/deletevolunteer?id=" + id);
    }

    // volunteer search
    searchVolunteer(id: any) {
        return this.http.get(this.url + "/volunteersearch?id=" + id);
    }

    // volunteer update
    updateVolunteer(data: any, id: any) {
        return this.http.post(this.url + "/volunteerupdate?id=" + id, data);
    }

    // donor stats
    getDonationStats(userid: any) {
        return this.http.get(this.url + "/donationstats?userid=" + userid);
    }

    // admin stats
    getAdminStats() {
        return this.http.get(this.url + "/adminstats");
    }

    // contact form
    sendContact(data: any) {
        return this.http.post(this.url + "/contactinsert", data);
    }

    // get contact messages
    getContactMessages() {
        return this.http.get(this.url + "/contactmessages");
    }

    // get accepted donations (for delivery page)
    getAcceptedDonations() {
        return this.http.get(this.url + "/accepteddonations");
    }

    // mark donation delivered
    deliverDonation(id: any) {
        return this.http.get(this.url + "/deliverdonation?id=" + id);
    }

    // insert delivery record
    insertDelivery(data: any) {
        return this.http.post(this.url + "/deliveryinsert", data);
    }

    getDeliveryRecords() {

        return this.http.get(
            this.url + "/deliveryrecords"
        );

    }

}