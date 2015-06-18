# Manage My Lab

(*) the name of the app is currently "Manage My Lab" but we are still looking for a better name, all suggestions are welcome (create an issue with the label 'codename' or vote for the best one by adding '+1' in comment for existing ones).

### CHANGELOG
v0.1 (20150630) aka "minchee-flamboyant":

* initial release including basic services for equipment and material as well as configuration of the app.
* using pouchdb as local storage and can sync with CouchDB if configured
* WARNING: Full admin only. Everyone can change everything. We recommend to use this version only for testing purpose or in the case of single user mode.
* Initial set of tests.

## Background
Although Fab Labs around the world are by essence decentralised and very autonomous, they all have very similar processes, use similar equipments or consume similar material. Obviously there are differences but most of them regularly encounter same questions how to manage different part of their activities.
The proposed application intend to solve very common problems encountered by Fab Labs around the world. It also provides a world-wide global Report API to help the community better understand its needs and usages. 
We do not believe in "one size fits all" approach with a centralised system that would try to fit everyone...or no one ;-) We rather want to offer a decentralised application, which is more inline with the way the community works. 

## 1. Introduction
"Manage My Lab" is an open-source application to help fab labs and friends (makerspaces...) to run their activities including the following:

* Dashboard
* Equipment and booking
* Material and selling
* Events
* Members
* Report API

These activities (or most probably a subset of it) will be covered by version 1, of course we might add new ones based on popular requests (create an issue with label 'new feature' or vote for an existing). We have based this application on our own experience and we have tried to make it as much as possible generic and applicable in most of the cases. 
Please feel free to share your experience and requirements.

This application is based on the following amazing open source software:

* client side: [AngularJS](https://angularjs.org/), [Ionic Framework](http://ionicframework.com/), [PouchDB](http://pouchdb.com/)
* server side (optional): [CouchDB](http://couchdb.apache.org/)

We chose to only have a mobile application (both Android and iOS), if requested we could also extend to a web application. 
By default the application will work offline and in a single user mode (thanks to PouchDB, even in the browser).
However, once coupled to a CouchDB server the application will be able to turn into a multi-users application (to allow all members of the lab to use it for example).

## 2. Equipment
All fab labs have valuable assets such as 3d printers, laser cutters, CNC machines or even simply tools. This module allows the lab to register all equipment and manage a simple booking system (or check-in/check-out). 

An equipment as the following attributes: a unique asset code, brand, model, description, status and a photo (more can be added later, but again we are trying first to keep it simple).

## 3. Material
Most machines need some consumable such as acrylic, plywood, PLA, etc... This section allows us to manage consumable stock as well as cost (if material is for sale).

Material will include the following attribute: type of material (acrylic, plywood,..), quantity, color, usage (Hand work, 3d printer...) and some technical and/or financial attributes based on the material itself (such as size, original cost, selling cost (if any), supplier, thickness, cost per unit...)

## 4. Events
Convenient way to organise the lab activities such as workshops, talks, etc... 
Ultimately, members should be able to register through the application. 
The application will also provide an RSS feed (through the server) which can be convenient for your website.

## 5. Members
Directory to manage your members, set permissions, track their activities with equipments, materials or events.

## 6. Report API
*"the Open Data for Fab Labs"*

Since fab labs around the world are by definition very decentralised, it is often difficult to get an understanding of the activities and processes. Not mentioning that it is nearly impossible to produce good world wide global analytics on some details information. 

What we are proposing is a simple way for all fab labs using the ”Manage My Lab” software to be part of a global analytics tool where local data will be aggregated and analysed globally. 

All collected data will be openly available in order to help researchers and fab labs stakeholders to better understand the movement, the activities, the local differences or maybe identify global issues. Ideally a monthly/yearly report on the state of fab labs based on those collected data could be generated (similar to what [3DHubs](https://www.3dhubs.com/) is doing on 3D Printing).

It seems obvious to us that we cannot force anyone to participate in this Fab Global Report and it is proposed to join in an opt-in mode. Once a lab joins the Global Report API, the lab manager should also be able to decide exactly what s/he wants to share in details. 
In order to participate (not mandatory) on the global reporting initiative the fab lab will have to follow the following step:

* generate a unique API key,
* set the level of details to report (the fab lab decides what it really wants to share)
* submit the key to the global repository

Fab Labs using other applications to manage their activities could also eventually report if they are willing too. We will propose an open API definition for any software to follow.

