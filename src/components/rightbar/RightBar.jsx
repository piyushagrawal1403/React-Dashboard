import { useAuth } from "../../Context";
import Section from "./Section";
import NotificationItem from "./NotificationItem";
import ActivityItem from "./ActivityItem";
import ContactItem from "./ContactItem";

import { notifications, contactsData, activityData } from "../../data/rightbarData";

export default function RightBar() {
  const { isRightClose, isDarkMode, setIsRightClose } = useAuth();

  return (
    <div
      className={`
        transition-all duration-300 border-l
        ${isRightClose ? "w-0" : "w-[20rem]"}
        ${isDarkMode ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-200"}
        overflow-hidden  
        h-screen          
        overflow-y-auto
      `}
    >
      {!isRightClose && (
        <div className="p-4">
          <Section title="Notifications" isDarkMode={isDarkMode}>
            {notifications.map((notif, index) => (
              <NotificationItem key={index} notif={notif} isDarkMode={isDarkMode} />
            ))}
          </Section>

          <Section title="Activities" isDarkMode={isDarkMode}>
            {activityData.map((activity, index) => (
              <ActivityItem key={index} activity={activity} isDarkMode={isDarkMode} />
            ))}
          </Section>

          <Section title="Contacts" isDarkMode={isDarkMode}>
            {contactsData.map((contact, index) => (
              <ContactItem
                key={index}
                contact={contact}
                index={index}
                isDarkMode={isDarkMode}
              />
            ))}
          </Section>
        </div>
      )}
    </div>
  );
}
