"use client"
import queryString from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//2:23:28

export const Search = () => {
    console.log('i am logged here');

    return (
        <form
        onSubmit={() => {}}
        className="relative w-full lg:w-[400px] flex items-center">
            <Input
                placeholder="Search"
            />
            <Button 
            type="submit"
            size="sm"
            variant="secondary"
            className="rounded-l-none"
            >
                <SearchIcon className="h-5 w-5 text-muted-foreground"/>
            </Button>
        </form>
    )
}