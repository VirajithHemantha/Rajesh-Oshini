export type Language = 'en' | 'si';

export const translations = {
  en: {
    hero: {
      celebration: "The Celebration of Love",
      groom: "RAJESH",
      bride: "OSHINI",
      location: "Hotel Grand Amalya • Homagama",
      date: "Save the Date • August 2026",
      discover: "Discover",
      inviteNamed: (name: string) => `We cordially invite ${name} to join us`,
      inviteAll: "Together with our families, we joyfully invite you to join us"
    },
    couple: {
      protagonists: "The Protagonists",
      groom: "The Groom",
      groomName: "Rajesh",
      groomParents: "Son of Mr.Dilip Singh & Mrs. Chandra Singh",
      bride: "The Bride",
      brideName: "Oshini",
      brideParents: "Daughter of Mr.Saman Udayasiri & Mrs.Anula Jayamanne"
    },
    ceremony: {
      sacredUnion: "The Sacred Union",
      celebration: "A Celebration of",
      traditionAndLove: "Tradition & Love",
      honoredToInvite: "We are honored to invite you to witness our union as we exchange vows surrounded by the warmth of our loved ones.",
      dateTitle: "Date: August 26, 2026",
      weddingCeremony: "Wedding Ceremony",
      time: "09.30 AM - 03.30 PM",
      timeLabel: "Time:",
      venueLabel: "Venue:",
      venueLine1: "Hotel Grand Amalya,",
      venueLine2: "Homagama"
    },
    location: {
      whereWeCelebrate: "Where We Celebrate",
      celebrate: "Celebrate",
      venueName: "Hotel Grand Amalya",
      venueCity: "Homagama",
      quote: `"A beautiful and sacred place where we will unite in holy matrimony."`,
      openLiveLocation: "Open Live Location",
      liveMap: "Live Map",
      label: "Diamond ballroom Hall"
    },
    rsvp: {
      rsvpBy: "RSVP BY",
      withGratitude: "With Gratitude",
      requestToConfirm: "We kindly request you to confirm your presence. Your timely response will help us make this celebration truly special.",
      fullName: "Full Name",
      numberOfGuests: "Number of Guests",
      dietaryNotes: "Dietary Notes (Optional)",
      submit: "Submit RSVP",
      sending: "Sending...",
      successTitle: "Success!",
      successDesc: "RSVP submitted. We can't wait to celebrate with you!",
      errorTitle: "Error",
      errorDesc: "Failed to submit RSVP. Please try again."
    },
    envelope: {
      requestHonour: "Request the honour of your presence",
      toCelebrate: "to celebrate their marriage at",
      venueName: "Hotel Grand Amalya",
      venueCity: "Homagama"
    }
  },
  si: {
    hero: {
      celebration: "ආදරයේ සැමරුම",
      groom: "රාජේෂ්",
      bride: "ඕෂිනි",
      location: "හෝටල් ග්‍රෑන්ඩ් අමල්යා • හෝමාගම",
      date: "දිනය වෙන්කරගන්න • 2026 අගෝස්තු",
      discover: "පිවිසෙන්න",
      inviteNamed: (name: string) => `අපගේ විවාහ මංගල්‍යයට සහභාගී වන ලෙස ${name} ට ආදරයෙන් ආරාධනා කරමු`,
      inviteAll: "අපගේ පවුල් වල ආශිර්වාදය සමඟින්, අපගේ විවාහ මංගල්‍යයට සහභාගී වන ලෙස ඔබට ආදරයෙන් ආරාධනා කරමු"
    },
    couple: {
      protagonists: "මනාල යුවළ",
      groom: "මනාලයා",
      groomName: "රාජේෂ්",
      groomParents: "දිලිප් සිං මහතා සහ චන්ද්‍රා සිං මහත්මියගේ ආදරණීය පුත්",
      bride: "මනාලිය",
      brideName: "ඕෂිනි",
      brideParents: "සමන් උදයසිරි මහතා සහ අනුලා ජයමාන්න මහත්මියගේ ආදරණීය දියණිය"
    },
    ceremony: {
      sacredUnion: "පූජනීය බැඳීම",
      celebration: "සම්ප්‍රදායේ සහ",
      traditionAndLove: "ආදරයේ සැමරුමක්",
      honoredToInvite: "අපගේ ආදරණීයයන්ගේ ආශිර්වාදය මැද අපගේ විවාහ මංගල්‍යයට සහභාගී වන ලෙස ඔබට ගෞරවයෙන් ආරාධනා කරමු.",
      dateTitle: "දිනය: 2026 අගෝස්තු 26",
      weddingCeremony: "විවාහ මංගල්‍යය",
      time: "පෙ.ව. 09.30 සිට ප.ව. 03.30 දක්වා",
      timeLabel: "වේලාව:",
      venueLabel: "ස්ථානය:",
      venueLine1: "හෝටල් ග්‍රෑන්ඩ් අමල්යා,",
      venueLine2: "හෝමාගම"
    },
    location: {
      whereWeCelebrate: "සැමරුම්",
      celebrate: "ස්ථානය",
      venueName: "හෝටල් ග්‍රෑන්ඩ් අමල්යා",
      venueCity: "හෝමාගම",
      quote: `"අපගේ විවාහ මංගල්‍යය වෙනුවෙන් තෝරාගත් සුන්දර ස්ථානය."`,
      openLiveLocation: "සජීවී සිතියම බලන්න",
      liveMap: "සිතියම",
      label: "ඩයමන්ඩ් බෝල්රූම් ශාලාව"
    },
    rsvp: {
      rsvpBy: "පැමිණීම දැනුම් දෙන්න",
      withGratitude: "ස්තූතියි",
      requestToConfirm: "කරුණාකර ඔබගේ පැමිණීම දැනුම් දෙන්න. ඔබගේ කඩිනම් ප්‍රතිචාරය අපට ඉමහත් පිටිවහලක් වනු ඇත.",
      fullName: "සම්පූර්ණ නම",
      numberOfGuests: "පැමිණෙන සංඛ්‍යාව",
      dietaryNotes: "විශේෂ ආහාර අවශ්‍යතා (විකල්ප)",
      submit: "තහවුරු කරන්න",
      sending: "යවමින් පවතී...",
      successTitle: "සාර්ථකයි!",
      successDesc: "තහවුරු කිරීම සාර්ථකයි. ඔබගේ පැමිණීම බලාපොරොත්තුවෙන් සිටිමු!",
      errorTitle: "දෝෂයකි",
      errorDesc: "තහවුරු කිරීම අසාර්ථකයි. කරුණාකර නැවත උත්සාහ කරන්න."
    },
    envelope: {
      requestHonour: "ඔබගේ පැමිණීම ගෞරවයෙන් අපේක්ෂා කරමු",
      toCelebrate: "අපගේ විවාහ මංගල්‍යය සැමරීම සඳහා",
      venueName: "හෝටල් ග්‍රෑන්ඩ් අමල්යා",
      venueCity: "හෝමාගම"
    }
  }
};
