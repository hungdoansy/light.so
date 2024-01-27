import DoOrDoNot from "@/components/DoOrDoNot"
import Header from "@/components/Header"
import LightProtocol from "@/components/LightProtocol"
import MetaverseExplorer from "@/components/MetaverseExplorer"
import MetaverseTimeline from "@/components/MetaverseTimeline"
import NewEra from "@/components/NewEra"

export default function Home() {
    return (
        <>
            <Header />
            <MetaverseExplorer />
            <NewEra />
            <MetaverseTimeline />
            <LightProtocol />
            <DoOrDoNot />
        </>
    )
}
