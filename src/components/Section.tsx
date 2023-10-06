import { LevelContext } from "./LevelContext";

export default function Section({ level ,children }:any) {
    return (
      <section className="section">
        <LevelContext.Provider value={level}>
            {children}
        </LevelContext.Provider>
      </section>
    );
  }
  