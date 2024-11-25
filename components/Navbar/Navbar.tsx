// import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "../MobileSidebar/MobileSidebar";

// import { getApiLimitCount } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";
// import MobileSidebar from "../MobileSidebar/MobileSidebar";

const Navbar = async () => {
  //   const apiLimitCount = await getApiLimitCount();
  //   const isPro = await checkSubscription();
  const apiLimitCount = 5;
  const isPro = false;

  return (
    <div className="flex items-center p-4">
      <MobileSidebar
        isPro={isPro}
        apiLimitCount={apiLimitCount}
      />
      {/* <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div> */}
    </div>
  );
};

export default Navbar;
