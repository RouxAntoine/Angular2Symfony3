/**
 * Example of two repository
 */
import { Repository } from './repository';

export const DATAREPO: Repository[] = [
	Repository.fromJson({id: 1, name: 'repo 1', url: ""}),
    Repository.fromJson({id: 2, name: 'repo 2', url: ""})
];
