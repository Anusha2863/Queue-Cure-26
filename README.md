# Queue Cure ’26 — Real-Time Hospital Queue Management System

## 1. Project Overview

Queue Cure ’26 is a real-time hospital queue management web application designed to solve the problem of unmanaged patient queues in clinics. The system replaces manual token slips and verbal calling with a live digital queue system where both receptionist and patients can view real-time updates.

The project is built using HTML, CSS, JavaScript, and Firebase Realtime Database to ensure instant synchronization between multiple screens without page refresh.


## 2. Problem Statement

In many clinics and hospitals:

1. Patients wait without knowing their estimated turn.
2. Receptionists manage queues manually using paper tokens.
3. No real-time visibility of queue status.
4. High waiting time confusion and mismanagement.

This leads to:

1. Poor patient experience
2. Inefficient staff management
3. Lack of transparency

## 3. Proposed Solution

Queue Cure ’26 solves these issues by introducing:

1. A digital token system for every patient.
2. A receptionist dashboard to manage queue flow.
3. A patient view screen for live status tracking.
4. Firebase Realtime Database for instant synchronization.


## 4. Key Features

1. Real-time queue updates without refresh
2. Automatic token generation for each patient
3. "Call Next" system for sequential patient handling
4. Live patient waiting screen
5. Estimated waiting time calculation
6. Clean queue visualization
7. Cross-device synchronization using Firebase


## 5. System Workflow

1. Receptionist enters patient name
2. System assigns a unique token number
3. Patient is added to Firebase queue list
4. Receptionist clicks "Call Next" when ready
5. Current token updates in real time
6. Patient screen reflects:
   -> Current token being served
   -> Their token number
   -> People ahead
   -> Estimated wait time

## 6. Technology Stack

1. Frontend:
   -> HTML
   -> CSS
   -> JavaScript

2. Backend / Database:
   -> Firebase Realtime Database

3. Real-time Sync:
   -> Firebase onValue listener system

## 7. Firebase Architecture

1. Database Structure:
   queue:
   current: number
   lastToken: number
   list:
   - name
   - token

2. Functions Used:
   -> set() → updates queue data
   -> get() → reads current queue
   -> onValue() → real-time updates


## 8. Core Functional Modules

### 8.1 Add Patient Module

1. Accepts patient name input
2. Generates incremental token
3. Pushes patient data to Firebase list

### 8.2 Call Next Module

1. Increases current token counter
2. Removes served patient from queue
3. Updates Firebase in real-time

### 8.3 Live Sync Module

1. Uses Firebase onValue listener
2. Updates both receptionist and patient screens instantly
3. No page refresh required

### 8.4 Patient View Module

1. Displays current token
2. Takes patient token input
3. Calculates:
   -> People ahead
   -> Estimated waiting time


## 9. Data Flow Diagram (Text Representation)

1. User Input (Receptionist)
   -> Firebase Realtime Database
   -> Live Sync Trigger (onValue)
   -> Updates UI (Receptionist + Patient)


## 10. Key Insights (EDA / System Insights)

1. Queue grows dynamically based on patient input
2. Current token increases only when service progresses
3. Waiting time is calculated using:
   -> (Your Token - Current Token) × Average Consultation Time
4. System ensures fairness using FIFO (First In First Out) logic
5. Firebase acts as central real-time data controller


## 11. Challenges Faced

1. Managing duplicate token generation
2. Synchronizing multiple pages in real-time
3. Handling empty or null database states
4. Maintaining consistent queue order
5. Fixing Firebase write permission issues


## 12. Improvements Made

1. Introduced lastToken system for unique IDs
2. Added queue array structure for proper ordering
3. Implemented real-time listeners using onValue
4. Cleaned served patients using shift() method
5. Stabilized Firebase initialization logic


## 13. Future Enhancements

1. Doctor login system
2. SMS notification for patient turn
3. Voice announcements for token calling
4. Appointment booking system
5. Analytics dashboard (peak hours, wait time trends)
6. Multi-doctor queue support


## 14. Conclusion

Queue Cure ’26 demonstrates how simple web technologies combined with Firebase can solve real-world hospital inefficiencies. The system improves transparency, reduces waiting confusion, and enables real-time queue management without manual intervention.

This project showcases practical application of:

1. Real-time databases
2. Frontend state management
3. Event-driven architecture
4. Live synchronization systems


