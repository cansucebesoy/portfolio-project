import usePreferences from "../hooks/UsePreferences";

function Translation() {
  const { lang, setLang } = usePreferences();

  const toggleLanguage = () => {
    const newLang = lang === "english" ? "turkce" : "english";
    setLang(newLang);
  };

  return (
    <div>
      <button onClick={toggleLanguage} className="text-[#777777]">
        {lang === "english" ? (
          <>
            <span className="text-[#E92577]">TÜRKÇE</span>'YE GEÇ
          </>
        ) : (
          <>
            SWITCH TO <span className="text-[#E92577]">ENGLISH</span>
          </>
        )}
      </button>
    </div>
  );
}

export default Translation;
