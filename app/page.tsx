import {BandwidthAccountQuery} from "@/components/bandwidth-account-query";
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
    return (
        <div>
            <Toaster />
            <BandwidthAccountQuery />
        </div>
    );
}
