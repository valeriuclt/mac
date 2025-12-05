import WindowWrapper from "#hoc/WindowWraper"; 
import { socials } from "#constants";
import { WindowsControls } from "#components";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowsControls target="contact" />
        <h2>Contact details</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/images.jfif"
          alt="poza"
          className="w-20 rounded-full"
        />
        <h3>Contact details</h3>
        <p>
          Got an ideea? A question? Or hust wanna talk about cultural values? I
          am here{" "}
        </p>
        <p>email@contact.me</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
