import ContentSidebar from "@/components/content/content-sidebar";

const ContentLayout = async ({ children }: { children: React.ReactNode }) => (
    <div className="h-full">
        <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
            <ContentSidebar />
        </div>
        <main className="h-full md:pl-60">{children}</main>
    </div>
);

export default ContentLayout;
