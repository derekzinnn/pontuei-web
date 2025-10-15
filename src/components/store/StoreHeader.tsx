import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

interface StoreHeaderProps {
  userName?: string;
  userAvatar?: string;
}

export function StoreHeader({ userName = "João Silva", userAvatar }: StoreHeaderProps) {
  return (
    <motion.header 
      className="fixed top-0 right-0 left-64 h-16 bg-background/80 backdrop-blur-sm border-b border-border/50 z-30"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-end h-full px-6 gap-4">
        <Button variant="ghost" size="sm">
          <Bell className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={userAvatar} />
            <AvatarFallback className="bg-primary text-white text-sm">
              {userName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{userName}</span>
        </div>

        <Link to="/admin-store">
          <Button variant="ghost" size="sm">
            <LogOut className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </motion.header>
  );
}