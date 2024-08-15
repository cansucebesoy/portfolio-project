import usePreferences from "../hooks/UsePreferences";

function Translation() {
  const { lang, setLang } = usePreferences();

  return (
    <div>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="english">english</option>
        <option value="turkce">turkce</option>
      </select>
    </div>
  );
}

export default Translation;
