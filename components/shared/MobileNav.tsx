import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItem from "./NavItem"
  
function MobileNav() {
  return (<nav className="md:hidden">
    <Sheet>
  <SheetTrigger className=" align-middle">
    <Image src='/assets/icons/menu.svg'
    alt="Menu"
    width={24}
    height={24}
    className=" cursor-pointer"/>
  </SheetTrigger>
  <SheetContent className="flrx flex-col bg-white gap-6 md:hidden">
    <Image
    src='/assets/images/logo.svg'
    height={28}
    width={128}
    alt="logo"/>
    <Separator className=" border border-gray-50"/>
    <NavItem/>
     </SheetContent>
</Sheet>

  </nav>
  )
}

export default MobileNav