// Ganti import AlertInfo menjadi Alert
import { Alert } from "@/components/alert";

const TestAlert = () => {
    return (
        <div className="m-10 flex flex-col gap-4">

            <Alert variant="info" title="Alert Info">
                Ini adalah alert dengan tipe info
            </Alert>

            <Alert variant="success" title="Alert Success">
                Ini adalah alert dengan tipe success
            </Alert>

            <Alert variant="warning" title="Alert Warning">
                Ini adalah alert dengan tipe warning
            </Alert>

            <Alert variant="danger" title="Alert Danger">
                Ini adalah alert dengan tipe danger
            </Alert>
        </div>
    )
}

export default TestAlert;