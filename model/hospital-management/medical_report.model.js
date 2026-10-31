import mongoose from 'mongoose';
const medicalRecordSchema = new mongoose.Schema(
  {
    patientDetails: {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      dob: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
      },
    },
    medicalHistory: [
      {
        type: String,
      },
    ],
    vitals: {
      bloodPressure: {
        type: String,
        required: true,
      },
      temperature: {
        type: Number,
        required: true,
      },
      pulse: {
        type: Number,
        required: true,
      },
      respiratory: {
        type: Number,
        required: true,
      },
    },
    doctorObservation: {
      type: String,
      required: true,
    },
    recommendations: [
      {
        type: String,
      },
    ],
    tests: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
