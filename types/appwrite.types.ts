import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  privacyConsent: boolean;
}


export interface Pet extends Models.Document {
    petId: string;
    name: string;
    species: string;
    age: number;
    gender: Gender;
    breed: string;
    medicalHistory: boolean;
    clientId: string;
  }

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}