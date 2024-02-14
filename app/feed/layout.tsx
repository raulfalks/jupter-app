import AccountButton from "@/app/ui/components/AccountButton/account-button";


export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div>
                {children}
            </div>
            <div>
                <AccountButton />
            </div>
        </div>
    );
}
