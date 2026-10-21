import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { CDO_CONTACT } from "@/data/services";

export default function FloatingCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-2 gap-2">
        {/* Call Button */}
        <a
          href={CDO_CONTACT.phoneTel}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs text-white bg-emerald-700 active:bg-emerald-800 shadow-sm"
        >
          <Phone className="w-4 h-4 fill-current animate-pulse" />
          <span>Call Hotline</span>
        </a>

        {/* Facebook Messenger Button */}
        <a
          href={CDO_CONTACT.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs text-white bg-blue-600 active:bg-blue-700 shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Messenger</span>
        </a>
      </div>
    </div>
  );
}
