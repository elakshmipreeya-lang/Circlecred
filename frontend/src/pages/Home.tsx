import React from 'react';
import { Activity, CircleDollarSign, Users, Award } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-slate-800">
        <h1 className="text-3xl font-extrabold text-white mb-2">CircleCred Project Setup Complete</h1>
        <p className="text-slate-400 max-w-2xl">
          UPI-powered savings-circle platform. Project structure initialized for 3-developer team collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <CircleDollarSign className="w-6 h-6 text-emerald-400 mb-2" />
          <h3 className="text-sm font-semibold text-slate-400">Fixed Contribution</h3>
          <p className="text-lg font-bold text-white mt-1">Scheduled Pools</p>
        </div>
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <Users className="w-6 h-6 text-emerald-400 mb-2" />
          <h3 className="text-sm font-semibold text-slate-400">Savings Circles</h3>
          <p className="text-lg font-bold text-white mt-1">Rotating Payouts</p>
        </div>
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <Award className="w-6 h-6 text-emerald-400 mb-2" />
          <h3 className="text-sm font-semibold text-slate-400">Reliability Profile</h3>
          <p className="text-lg font-bold text-white mt-1">Credit Score</p>
        </div>
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <Activity className="w-6 h-6 text-emerald-400 mb-2" />
          <h3 className="text-sm font-semibold text-slate-400">Backend Health</h3>
          <p className="text-lg font-bold text-emerald-400 mt-1">GET /api/health</p>
        </div>
      </div>
    </div>
  );
};
