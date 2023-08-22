import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import NewEntryCard from '@/components/NewEntryCard';
import EntryCard from "@/components/EntryCard";
import Link from "next/link";



const getEntries = async () => {
    const user = await getUserByClerkID()

    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createAt: 'desc'
        }
    })

    return entries
}


const JournalPage = async () => {

    const entries = await getEntries()
    
    return (
        <div className="grid grid-cols-3 gap-4 p-10 ">
            <NewEntryCard />
            {entries.map(entry =>
                <Link href={`/journal/${entry.id}`} key={entry.id} >
                    <EntryCard entry={entry} />
                </Link>
               )}
        </div>
    )
}

export default JournalPage
